# library(fireData)
# library(plyr)
# library(jsonlite)
library(dplyr)
library(ggplot2)
library(shiny)

# token <- auth("AIzaSyCP12tkAAs7L8ScltoGAsiKW-EB5z1BBJc",
#               "naveedpash@gmail.com",
#               "evolve@2009")
# followup <- download(projectURL = "https://dili-16490.firebaseio.com/",
#     fileName = "followup/",
#     token = token$idToken) %>% ldply(stack) %>% spread(ind, values)
# mortality <- download(projectURL = "https://dili-16490.firebaseio.com/",
#                       fileName = "mortality/",
#                       token = token$idToken) %>%
#     ldply(stack) %>% spread(ind, values) %>% mutate(.id = nic)

drugsData <- read.csv2("data/drugsData.csv")

server <- function(input, output) {

    output$drugsBarchart <- renderPlot({
        drugsData %>% count(drugname, sort=TRUE) %>% filter(n>10) %>%
            ggplot(aes(drugname,n,fill=drugname)) + geom_bar(stat="identity") +
            theme(text = element_text(size = 18))
    })
    output$tbPlot <- renderPlot({
     drugsData %>% filter(drugname %in% input$drugs) %>%
         ggplot(aes(drugname, tb, fill=drugname)) + geom_boxplot()
    })
    output$ggtPlot <- renderPlot({
        drugsData %>% filter(drugname %in% input$drugs) %>%
            ggplot(aes(drugname, ggt, fill=drugname)) + geom_boxplot()
    })
    output$sgptPlot <- renderPlot({
        drugsData %>% filter(drugname %in% input$drugs) %>%
            ggplot(aes(drugname, sgpt, fill=drugname)) + geom_boxplot()
    })
    output$apPlot <- renderPlot({
        drugsData %>% filter(drugname %in% input$drugs) %>%
            ggplot(aes(drugname, ap, fill=drugname)) + geom_boxplot()
    })
    output$ptPlot <- renderPlot({
        drugsData %>% filter(drugname %in% input$drugs) %>%
            ggplot(aes(drugname, pt, fill=drugname)) + geom_boxplot()
    })

}
