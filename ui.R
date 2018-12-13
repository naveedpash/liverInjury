library(dplyr)

drugsData <- read.csv2("data/drugsData.csv")
drugnames <- drugsData %>% count(drugname, sort=TRUE) %>% filter(n>10) %>% select(drugname)

ui <- navbarPage("Menu",
              titlePanel("Karachi Registry for Drug Induced Liver Injury"),
              tabPanel("Summary",
                                  headerPanel("Summary of Suspected Medications"),
                                  plotOutput("drugsBarchart", width="720px", height="680px")
                                  ),
              tabPanel("Morbidity",
                                  headerPanel("Effect of Suspected Medications on LFTs"),
                                  sidebarPanel(
                                               checkboxGroupInput(inputId = "drugs",
                                                                  choices = drugnames$drugname,
                                                                  label = "Medication"
                                                                  )
                                               ),
                                  mainPanel(
                                            plotOutput("tbPlot", width="500px", height="400px"),
                                            plotOutput("sgptPlot", width="500px", height="400px"),
                                            plotOutput("apPlot", width="500px", height="400px"),
                                            plotOutput("ggtPlot", width="500px", height="400px"),
                                            plotOutput("ptPlot", width="500px", height="400px")
                                            )
                                  )
    )
