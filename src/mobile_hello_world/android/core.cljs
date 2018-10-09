(ns mobile-hello-world.android.core
  (:require [reagent.core :as r :refer [atom]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [mobile-hello-world.events]
            [mobile-hello-world.subs]))

(def ReactNative (js/require "react-native"))

(def app-registry (.-AppRegistry ReactNative))
(def text (r/adapt-react-class (.-Text ReactNative)))
(def view (r/adapt-react-class (.-View ReactNative)))
(def scroll-view (r/adapt-react-class (.-ScrollView ReactNative)))
(def image (r/adapt-react-class (.-Image ReactNative)))
(def touchable-highlight (r/adapt-react-class (.-TouchableHighlight ReactNative)))
(def text-input (r/adapt-react-class (.-TextInput ReactNative)))

(def ramon (js/require "./images/ramon.jpg"))
(def amigos-img (js/require "./images/amigos.jpg"))
(def peluca-img (js/require "./images/peluca.jpg"))

(defn alert [title]
  (.alert (.-Alert ReactNative) title))

(defn custom-img [imagen]
  [image {:source imagen
          :style  {:width 320 :height 340 :margin-bottom 30
                   :border-top-left-radius 25
                   :border-top-right-radius 25
                   :border-bottom-left-radius 25
                   :border-bottom-right-radius 25}}])

(defn custom-text [texto]
  [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} texto])

(defn app-root []
  (let [greeting (subscribe [:get-greeting])
        amigos (subscribe [:get-amigos])
        peluca (subscribe [:get-peluca])]
    (fn []
      [scroll-view {:style {:flex-direction "column" :margin 30}}
       [view {:style {:flex-direction "column" :align-items "center" :margin 40}}

        [custom-text @greeting]
        [custom-img ramon]

        [custom-text @amigos]
        [custom-img amigos-img]

        [custom-text @peluca]
        [custom-img peluca-img]
        
        [text-input {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}
                     :on-change-text #(dispatch [:set-greeting %])} @greeting]
        [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                              :on-press #(alert "HELLAAAOOOO!!")}
         [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press me"]]]])))

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "MobileHelloWorld" #(r/reactify-component app-root)))
