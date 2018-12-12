library(tidyr)
library(dplyr)
library(magrittr)
library(ggplot2)
library(stringr)

data <- memisc::as.data.set(memisc::spss.system.file("farhana.sav"))
data <- as.data.frame(data)
data$drugname <- data$nameofdrug
data$drugdose <- data$doseofthedrug

data %>%
    mutate(drugname = case_when(str_detect(drugname, "\\(+")                           ~ str_extract(drugname, "(?<=\\().+?(?=\\))"),
                                str_detect(drugname, "(?<!(m|M)yrin(-| )(p|P))/ATT$")  ~ str_replace(drugname, "/ATT", ""),
                                str_detect(drugname, "^ATT/(?!(m|M)yrin(-| )(p|P))")   ~ str_replace(drugname, "ATT/", ""),
                                str_detect(drugname, "^((m|M)yrin(-| )(p|P))/(?!ATT)") ~ str_replace(drugname, "((m|M)yrin(-| )(p|P))/", ""),
                                TRUE ~ as.character(drugname))) %>%
    filter(drugname != "") -> data

blanks <- data$drugdose == ""
disorganised <- vector(mode = "logical")
for (i in 1:nrow(data)) {
    disorganised[i] <- (length(stringr::str_split(data$drugname, "/")[[i]]) != length(stringr::str_split(data$drugdose, "/")[[i]]))
}

rbind(
    data %>% filter(!disorganised & !blanks) %>% separate_rows(drugname, drugdose, sep="/"),
    data %>% filter(!disorganised & blanks) %>% separate_rows(drugname, sep="/")
) -> drugsData

drugsData %>%
    mutate(drugname = case_when(str_detect(drugname, "(v|V)(a|A)(n|N|c)") ~ "vancomycin",
                                str_detect(drugname, "TAZO") ~ "tazocin",
                                str_detect(drugname, "(s|S)tr?ep?") ~ "streptomycin",
                                str_detect(drugname, "sodium bicarbonate") ~ "NaHCO3",
                                str_detect(drugname, "sodium chloride?") ~ "NaCl",
                                str_detect(drugname, "SITAMET") ~ "sitagliptin/metformin",
                                str_detect(drugname, "(r|R)(i|I)(f|F)(a|A)?") ~ "rifampicin",
                                str_detect(drugname, "rani") ~ "ranitidine",
                                str_detect(drugname, "(p|P)yi?z?ra?") ~ "pyrazinamide",
                                str_detect(drugname, "PROCLOREPERAZINE") ~ "prochlorperazine",
                                str_detect(drugname, "PIP") ~ "piperacillin",
                                str_detect(drugname, "(p|P)(a|A)(r|R)(a|A)") ~ "paracetamol",
                                str_detect(drugname, "PANTOPRAZOLE") ~ "pantoprazole",
                                str_detect(drugname, "(o|O)(mep|pem)") ~ "omeprazole",
                                str_detect(drugname, "OMBEPAR") ~ "ombepar",
                                str_detect(drugname, "napro") ~ "naproxen",
                                str_detect(drugname, "(m|M)(yrin|YRIN)(-| )(p|P)(?!,)") ~ "myrin-P",
                                str_detect(drugname, "(m|M)oxi") ~ "moxifloxacin",
                                str_detect(drugname, "(morp|MORP)") ~ "morphine",
                                str_detect(drugname, "(morp|MORP)") ~ "morphine",
                                str_detect(drugname, "midaz") ~ "midazolam",
                                str_detect(drugname, "(?<!A)(met|MET)(?!o|O|h)(r|R)?") ~ "metronidazole",
                                str_detect(drugname, "methyl") ~ "methylprednisone",
                                str_detect(drugname, "(m|M)ero") ~ "meropenem",
                                str_detect(drugname, "(l|L)(ove|ev|EV)(o|O|f)") ~ "levofloxacin",
                                str_detect(drugname, "lev(et)?(?!o|f)") ~ "levetiracitam",
                                str_detect(drugname, "^(i|I)?(p|P)(r|R)(?!o|O)(a|A)?(tropium)?") ~ "ipratropium",
                                str_detect(drugname, "Pratropium") ~ "ipratropium",
                                str_detect(drugname, "(h|H)ydro") ~ "hydrocortisone",
                                str_detect(drugname, "(h|H)ydro") ~ "hydrocortisone",
                                str_detect(drugname, "(imil|Imip)") ~ "imipenem",
                                str_detect(drugname, "gela") ~ "gelatin",
                                str_detect(drugname, "GABAPETIN") ~ "gabapentin",
                                str_detect(drugname, "(e|E)(th|TH)(?!y)") ~ "ethambutol",
                                str_detect(drugname, "(epin|EPIN)") ~ "epinephrine",
                                str_detect(drugname, "(ATT induce|DRUGS INDUCE|drugs induce)") ~ "ATT",
                                str_detect(drugname, "CLOP") ~ "clopidogrel",
                                str_detect(drugname, "(c|C)(e|E)(f|F)(i|I)?(l|t|T)?(r|R)?p?") ~ "ceftriaxone",
                                str_detect(drugname, "clinda") ~ "clindamycin",
                                str_detect(drugname, "(clarith|clirth)") ~ "clarithromycin",
                                str_detect(drugname, "(a|A)(m|M)(i|I)(k|K)?") ~ "amikacin",
                                str_detect(drugname, "a?(a|A)(s|S)(p|P)(r|R)?") ~ "aspirin",
                                TRUE ~ as.character(drugname))) -> drugsData

drugsData %>% mutate(drugdose = as.numeric(drugdose)) %>%
    select(-c(var00001,var00001,var00003,var00004,var00005)) -> drugsData

write.csv2(drugsData, "drugsData.csv")
