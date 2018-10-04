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

(def ramon (js/require "./images/ramon.jpg"))
(def amigos-img (js/require "./images/amigos.jpg"))
(def peluca-img (js/require "./images/peluca.jpg"))

(defn alert [title]
  (.alert (.-Alert ReactNative) title))

(defn app-root []
  (let [greeting (subscribe [:get-greeting])
        amigos (subscribe [:get-amigos])
        peluca (subscribe [:get-peluca])]
    (fn []
      [scroll-view {:style {:flex-direction "column" :margin 30}}
       [view {:style {:flex-direction "column" :margin 40 :align-items "center"}}
        [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @greeting]
        [image {:source ramon
                :style  {:width 320 :height 340 :margin-bottom 30}}]
        [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @amigos]
        [image {:source amigos-img
                :style  {:width 320 :height 340 :margin-bottom 30}}]
        [text {:style {:font-size 30 :font-weight "100" :margin-bottom 20 :text-align "center"}} @peluca]
        [image {:source peluca-img
                :style  {:width 320 :height 340 :margin-bottom 30}}]
        
        [touchable-highlight {:style {:background-color "#999" :padding 10 :border-radius 5}
                              :on-press #(alert "HELLAAAOOOO!!")}
         [text {:style {:color "white" :text-align "center" :font-weight "bold"}} "press me"]]]])))

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent app-registry "MobileHelloWorld" #(r/reactify-component app-root)))
