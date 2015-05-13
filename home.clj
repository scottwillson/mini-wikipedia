(ns wiki-2.routes.home
  (:require [compojure.core :refer :all]
            [wiki-2.views.layout :as layout]))

(defn fib
  ([n]
     (fib [0 1] n))
  ([x, n]
     (if (< (count x) n)
       (recur (conj x (apply + (take-last 2 x))) n)
       x)))

(defroutes home-routes
  (GET "/api/v1/articles/1" [] (str (fib 34))))
