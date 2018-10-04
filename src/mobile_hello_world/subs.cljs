(ns mobile-hello-world.subs
  (:require [re-frame.core :refer [reg-sub]]))

(reg-sub
 :get-greeting
 (fn [db _]
   (:greeting db)))


(reg-sub
 :get-amigos
 (fn [db _]
   (:amigos db)))


(reg-sub
 :get-peluca
 (fn [db _]
   (:peluca db)))
