(ns mobile-hello-world.db
  (:require [clojure.spec.alpha :as s]))

;; spec of app-db
(s/def ::greeting string?)
(s/def ::amigos string?)
(s/def ::peluca string?)

(s/def ::app-db
  (s/keys :req-un [::greeting ::amigos ::peluca]))

;; initial state of app-db
(def app-db {:greeting "Hola Mundo! Dice Ramon en Android!!"
             :amigos "... con sus amigos ..."
             :peluca "... y se corta la peluca!!!"})
