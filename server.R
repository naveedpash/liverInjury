library(fireData)
library(plyr)
library(jsonlite)
library(tidyr)
library(dplyr)
library(magrittr)

token <- auth("AIzaSyCP12tkAAs7L8ScltoGAsiKW-EB5z1BBJc",
              "naveedpash@gmail.com",
              "evolve@2009")
followup <- download(projectURL = "https://dili-16490.firebaseio.com/",
    fileName = "followup/",
    token = token$idToken) %>% ldply(stack) %>% spread(ind, values)
mortality <- download(projectURL = "https://dili-16490.firebaseio.com/",
    fileName = "mortality/",
    token = token$idToken) %>% ldply(stack) %>% spread(ind, values) %>% mutate(.id = nic)

server <- function(input, output) {
}
