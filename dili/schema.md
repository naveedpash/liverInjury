# Database Schema

This document describes the schema of the database as required by the DILI protocol.

## Term Definitions

- String: text variable
- Boolean: yes/no variable
- Float: non-integer real number variable

## Users

This table will contain list of users of the app and their roles

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| unique	 | String  | Unique Identifier								    | Unique to every user				|
| name		 | String  | User's Name								    | Unique to every user				|
| institution	 | String  | User's Institution								    | {AKUH, JPMC, CHK, LNH, ASH, ZH}                   |
| role		 | String  | User's Role								    | {admin, entrant, analyst}				|

#### Consideration
- role
	- Admin will have previleges to read from registry, write to registry, modify registry, and add users
	- Delegate will have previlege to add entrants
	- Entrant will have previlege to write to registry via app only
	- Analyst will have previleges to read from registry via dedicated online portal
	- Users can have multiple roles
		- e.g. a physician can be given entrant role to add suspected cases of DILI as well as delegate role to invite other physicians to the program
	- Users will be added only after review by Dr. Shahab Abid 
		- Optionally requirement for electronic countersignature can be enforced

## Patient Characteristics

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| unique	 | String  | Unique Identifier								    | Unique to every patient				|
| name           | String  | Patient’s Name                                                                 | none	                                        |
| age            | Number  | Patient’s Age                                                                  | Greater than 2                                    |
| gender         | String  | Patient’s Gender                                                               | {male, female}                                    |
| consent        | Boolean | Has patient given consent                                                      | none	                                        |
| entrant        | String  | ID of physican entering data                                                   | none	                                        |
| entrydate      | Date    | Date of data entry                                                  	    | none	                                        |

#### Considerations

- age
	- How precise do we want to be about age? Nearest year or nearest month?

## Dili Episode

### Suspected Drug

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| drug           | String  | Drug suspected to have caused DILI                                             | Alphabets only                                    |
| dose           | Float   | Administered dose of the drug suspected                                        | none                                              |
| doseunit       | String  | Unit of dose of the drug suspected                                        	    | {milligrams, micrograms}                          |
| indication     | String  | Indication for which the suspected drug was administered                       | none                          			|
| rechallenge    | Boolean | Was patient rechallenged with the suspected drug?                              | none                                              |
| rechallengeres | String  | What was result of rechallenge?                                                | ???                                               |

#### Considerations
- rechallengres
	- Can this variable be further codified? Are there specific signs and symptoms we are looking for during rechallange?
		- E.g. rash, fever, hepatomegaly, change in laboratory values?

### History

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| onset          | Date    | Date of onset of symptoms                                                      | greater than 3 months prior to record entry       |
| icteric        | Boolean | Was patient visibly icteric on presentation                                    | none                                              |
| nausea         | Boolean | Was the patient nauseated on initial presentation                              | none                                              |
| vomiting       | Boolean | Was the patient vomiting on initial presentation                               | none                                              |
| anorexia       | Boolean | Was the patient anorexic on initial presentation                               | none                                              |
| abdpain        | Boolean | Did the patient complain of abdominal pain on initial presentation             | none                                              |
| darkurine      | Boolean | Did the patient complain of dark colored urine on inital presentaiton          | none                                              |
| pruritis       | Boolean | Did the patient complain of itching on initial presentation                    | none                                              |
| rash           | Boolean | Did the patient complain of rash on initial presentaion                        | none                                              |
| fever          | Boolean | Did the patient complain of fever on initial presentation                      | none                                              |

#### Considerations
- fever & rash
	- Is there a need to include a separate variable for fever and rash in the history section?
	- Is there a significance to fever and rash reported by the patient but is not present on examination at initial presentation?

### Physical Examination

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| fever          | Boolean | Did the patient have documented fever on initial examination                   | none                                              |
| rash           | Boolean | Did the patient have rash on examination on initial presentation               | none                                              |
| icteric        | Boolean | Was the patient visibly icteric on examination on initial presentation         | none                                              |
| hepatictender  | Boolean | Did the patient have hepatic tenderness on initial examination                 | none                                              |
| stigmata       | Boolean | Did the patient have one or more stigmata of CLD on initial presentation       | none                                              |

#### Considerations
- Stigmata
	- Do we need to further codify "stigmata" into yes/no responses?
		- E.g. spider angiomas, hepatomegaly, pedal edema
	- Or should we define "stigmata" as presence of two or more stigmata of CLD on clinical examination?

### Medical History

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| hf             | Boolean | Does the patient have heart failure                                            | none                                              |
| hypotension    | Boolean | Is the patient hypotentive on presentation                                     | none                                              |
| septic         | Boolean | Is the patient septic on initial presentation                                  | none                                              |
| tpn            | Boolean | Did the patient receive TPN immediately prior to presentation                  | none                                              |
| hepB           | Boolean | Does the patient suffer from Hepatitis B                                       | none                                              |
| hepC           | Boolean | Does the patient suffer from Hepatitis C                                       | none                                              |
| alcohol        | Boolean | History of alcohol abuse                                                       | none                                              |
| comorbid       | List    | Known hepatic co-morbidities                                                   | {Hep C, Hep B, HCC, hemochromomatosis, wilson’s } |

#### Considerations
- tpn
	- Will there be limit to how recently TPN was given to qualify as yes?
	- According to some journals, tpn components have various half lives from 12 hours to 1 month; is 3 months a reasonable cut off?
- hepC
	- Do we need to differentiate between Hep C undergoing treatment and Hep C completed treatment?

### Drug History

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| medhx          | String  | What medicines has the patient taken 3 months prior to initial presentation    | Alphabets only                                    |
| medhxdose      | Float   | What was the dosage of these medications                                       | greater than 0, milligrams                        |
| medhxduration  | Number  | How long did the patient take these medications                                | Number only, months                               |
| pastrxn        | String  | Has the patient previously been exposed to this drug                           | none                                              |

### Laboratory Tests on Initial Presentation

| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| date	         | Date    | Date on which patient's initial labs were drawn                                | greater than 1/1/2018                             |
| bilirubin      | Float   | Patient bilirubin on initial presentation                                      | non-negative                                      |
| ast            | Float   | Patient’s AST level on initial presentation                                    | non-negative                                      |
| alt            | Float   | Patient’s ALT level on initial presentation                                    | non-negative                                      |
| alkPhos        | Float   | Patient’s Alkaline Phosphatase level on initial presentation                   | non-negative                                      |
| INR            | Float   | Patient’s INR on initial presentation                                          | non-negative                                      |
| antiHAVIgM     | Boolean | Anti-HAV IgM reactive on initial presentation                                  | none                                              |
| antiHBcIg      | Boolean | Anti-HBc Ig reactive on initial presentation                                   | none                                              |
| HBsAg          | Boolean | HBsAg reactive on initial presentation                                         | none                                              |
| antiHCVIg      | Boolean | Anti-HCV Ig reactive on initial presentation                                   | none                                              |
| HCVrna         | Boolean | HCV RNA reactive on initial presentation                                       | none                                              |
| ANA            | Boolean | ANA reactive on initial presentation                                           | none                                              |
| biopsy results | Image   | Upload picture of biopsy results report                                        | less than 100KB                                   |

#### Considerations
- Do each of these lab values need separate date fields
	- Will doing that make it harder for physicians to fill out the mobile proforma?

### Past Laboratory Records

| Field            | Type    | Description                                                                    | Constraints                                       |
| :------          | :-----  | :------------                                                                  | :------------                                     |
| astprior         | Float   | Patient’s most recent AST level prior to initial presentation                  | none                                              |
| astpriordate     | Date    | Date of Patient’s most recent prior AST level                                  | greater than 1/1/2018                             |
| altprior         | Float   | Patient’s most recent ALT level prior to initial presentation                  | none                                              |
| altpriordate     | Date    | Date of Patient’s most recent prior ALT level                                  | greater than 1/1/2018                             |
| alkphosprior     | Float   | Patient’s most recent Alkaline Phosphatase level prior to initial presentation | none                                              |
| alkphospriordate | Date    | Date of Patient’s most recent prior Alkaline Phosphatase level                 | greater than 1/1/2018                             |
| inrprior	   | Float   | Patient’s most recent INR prior to initial presentation			      | none                                              |
| inrpriordate     | Date    | Date of Patient’s most recent prior INR	                 		      | greater than 1/1/2018                             |

### Follow-up Laboratory Records
| Field          | Type    | Description                                                                    | Constraints                                       |
| :------        | :-----  | :------------                                                                  | :------------                                     |
| bilirubinfup   | Float   | Follow up bilirubin                                                            | non-negative                                      |
| bilifupdate    | Date    | Date on which follow up bilirubin was drawn                                    | greater than 1/1/2018                             |
| altfup         | Float   | Follow up ALT                                                                  | non-negative                                      |
| altfupdate     | Date    | Date on which Follow up ALT was drawn                                          | non-negative                                      |
| alkPhosfup     | Float   | Follow up Alkaline Phosphatase                                                 | non-negative                                      |
| alkPhosfupdate | Date    | Date on which follow up Alkaline Phosphatase was drawn                         | greater than 1/1/2018                             |
| INRfup         | Float   | Date on which follow up bilirubin was drawn                                    | non-negative                                      |
| INRfupdate     | Date    | Date on which follow up bilirubin was drawn                                    | greater than 1/1/2018                             |
