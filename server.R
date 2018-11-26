library(fireData)

token <- auth("AIzaSyCP12tkAAs7L8ScltoGAsiKW-EB5z1BBJc",
              "naveedpash@gmail.com",
              "evolve@2009")
followup <- download(projectURL = "https://dili-16490.firebaseio.com/",
                     fileName = "followup/",
                     token = token$idToken)
mortality <- download(projectURL = "https://dili-16490.firebaseio.com/",
                     fileName = "mortality/",
                     token = token$idToken)

server <- function(input, output) {
    
}
