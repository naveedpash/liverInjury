library(fireData)
library(plyr)
library(jsonlite)
library(memisc)
library(tidyr)
library(dplyr)
library(magrittr)
library(stringr)

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
    data <- as.data.set(spss.system.file("data/farhana.sav"))
    data <- as.data.frame(data)
    data$drugname <- data$nameofdrug
    data$drugdose <- data$doseofthedrug
    data %>%
        mutate(drugname = case_when(str_detect(drugname,"\\(+")                           ~ str_extract(drugname, "(?<=\\().+?(?=\\))"),
                                    str_detect(drugname,"(?<!(m|M)yrin(-| )(p|P))/ATT$")  ~ str_replace(drugname, "/ATT", ""),
                                    str_detect(drugname,"^ATT/(?!(m|M)yrin(-| )(p|P))")   ~ str_replace(drugname, "ATT/", ""),
                                    str_detect(drugname,"^((m|M)yrin(-| )(p|P))/(?!ATT)") ~ str_replace(drugname, "((m|M)yrin(-| )(p|P))/", ""),
                                    TRUE ~ as.character(drugname))) -> data
    for(i in 1:nrow(data)) {
        if(length(str_split(data$drugname, "/")[[i]]) != length(str_split(data$drugdose, "/")[[i]])) {
            print(data[i,c('drugname','drugdose')])
        }
    }
    data %>% filter(length(unlist(str_split(drugname, "/"))) != length(unlist(str_split(drugdose, "/"))))
        select(nameofdrug, drugname, drugdose) -> data
}
