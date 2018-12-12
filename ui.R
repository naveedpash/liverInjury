library(dplyr)

drugsData <- read.csv2("data/drugsData.csv")
drugnames <- drugsData %>% count(drugname, sort=TRUE) %>% filter(n>10) %>% select(drugname)

ui <- fluidPage(
    titlePanel("Karachi Registry for Drug Induced Liver Injury"),
    headerPanel("Summary of Suspected Medications"),
    sidebarPanel(
                checkboxGroupInput(inputId = "drugs",
                                   choices = drugnames,
                                   label = "Medication"
                                   )
                 ),
    mainPanel(
        tabsetPanel(type="tabs",
            tabPanel("Summary",
                     plotOutput("drugsdrugsBarchart", width="500px", height="400px")
            ),
            tabPanel("Morbitidy",
                fluidRow(
                    column(5, align="right",
                        plotOutput("tbPlot", width="500px", height="400px"),
                        plotOutput("sgptPlot", width="500px", height="400px"),
                        plotOutput("apPlot", width="500px", height="400px"),
                        plotOutput("ggtPlot", width="500px", height="400px"),
                        plotOutput("ptPlot", width="500px", height="400px")
                    )
                )
            )
        ),
    )
)
