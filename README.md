# Agriboost dashboard

>Agriboost dashboard for managing business event candidates

## Content

**[1. Technologies](#heading--1)**

  * [1.1. Markdown formatting cheatsheet](#heading--1-1)
  * [1.2. Markdown formatting details](#heading--1-2)

**[2. BBCode formatting](#heading--2)**

  * [2.1. Basic text formatting](#heading--2-1)

      * [2.1.1. Not so basic text formatting](#heading--2-1-1)

  * [2.2. Lists, Images, Code](#heading--2-2)
  * [2.3. Special features](#heading--2-3)
  
## 1. Technologies <a name="heading--1"/>
## Technologies

|     Technologie    |     Version     | 
| ------------- | :-----------: | 
| react      | 17.0.2 | 
| redux      |   4.0.5    |   
| material-ui|   4.11.0    |   
| material-table|  1.69.2    |  

## Installation

```
git clone https://github.com/HamdiNawfel/agriboost-dashboard.git
npm install
npm start

```

## Environment variables


```
REACT_APP_API_URL=http://api_url...
```
## Features
> Dashboard features are written us user stories forme `As a [type of user], I want [an action] so that [a benefit/a value]`
>
> Please let me know if you want to access to the [product backlog](https://trello.com/b/6Z14DUQc/agriboost)
for more details about this features.
* As a **root admin**, I want to be able to **add other admins with an username and password** so that I can **keep the dashboard operations secure** 
* As a **root admin**, I want to be able to **add and edit the admins name and phone number** so that I can **find a contact infos about them** 
* As a **root admin**, I want to be able to **delete an admin account** so that I can **keep track of my team menbers** 
* As an **admin**, I want to be able to **change the password** so that I can **keep it secure** 
* As an **admin**, I want to be able to **logout** so that I can **keep my account secure** 
* As an **admin**, I want to be able to **edit my contact infos** so that I can **keep it uptodate** 
* As an **admin**, I want to be able to **get the candidates list** so that I can **find all the submitted informations**
* As an **admin**, I want to be able to **print the candidates inforation on pdf** so that I can **keep easy share it**
* As an **admin**, I want to be able to **to change the candidate status** so that I can **keep track them according to their status**
* As an **admin**, I want to be able to **get the total number of candidates with every status** so that I can **keep track their number**
* As an **admin**, I want to be able to **filter the candidates based on ther status** so that I can **keep easy track them**
* As an **admin**, I want to be able to **search for a specific candidate with their CIN** so that I can **find the submitted informations**
* As an **admin**, I want to be able to **get the requested reclamations** so that I can **contact them to resolve there requests** 
* As an **root admin**, I want to *only* be able to **to delete a reclamations** so that I can **keep track the candidates problem** 

## Folder Structure

```
src
├── assets
├── pages
│   ├── candidates
│   │   ├── components
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   └── types.js
│   │
│   └── ...
│       
├── redux
│    ├── RootReducer.js
│    └── Store.js  
│
├── utils
│    ├── Navbar
│    :
│    └──...
│      
├── App.js   
└── index.js
```
### 1.1. Markdown formatting cheatsheet <a name="heading--1-1"/>

