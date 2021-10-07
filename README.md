# Agriboost dashboard

>Agriboost dashboard for managing business event candidates

## Content

**[1. Technologies](#heading--1)**

**[2. Installation](#heading--2)**

**[3. Environment variables](#heading--3)**

**[4. Features](#heading--4)**

**[5. Folder Structure](#heading--5)**

**[6. Screenshots](#heading--6)**


## 1. Technologies <a name="heading--1"/>


|     Technologie    |     Version     | 
| ------------- | :-----------: | 
| react      | 17.0.2 | 
| redux      |   4.0.5    |   
| material-ui|   4.11.0    |   
| material-table|  1.69.2    |  

## 2. Installation <a name="heading--2"/>

```
git clone https://github.com/HamdiNawfel/agriboost-dashboard.git
npm install
npm start

```

## 3. Environment variables <a name="heading--3"/>

```
REACT_APP_API_URL=http://api_url...
```
## 4. Features <a name="heading--4"/>

> Dashboard features are written us *user stories* with this forme: `As a [type of user], I want [an action] so that [a benefit/a value]`

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

## 5. Folder Structure <a name="heading--5"/>

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

## 6. Screenshots <a name="heading--6"/>
Dashboard Page
![Mark Down](https://lh3.googleusercontent.com/0w7MJ9d53Gwh5AQavzJCcLuB2XRF_9h_jfTakU67VJY06gga5tjbUghyvQRqFQDO0e3WGWifYwBo5JnvkvfxSr-YryE-4AxU9h8jJP5B5ndLfYxZ59rmFU3AvWI0dKAtfzGGnbAbUMRa7K-zlAujiCBZL5ee7VMaveucgMH5-WzsZ67yfmd82g9ODYUXJixA9syRyC1SX4OUFpHTsvTEz3R0IQ0DdjfY_o5X-tdyWIJ8MDfBMRDbNibDjjR7G7G02CoYd8pcbiEEDkGcbPclWBu0Xyi2yyDYrWJm_BobYz_Qs-6A69CtDs5svM9r0dUXqoAr3pU6We5iHkGv5BQAA89ERiyy-0wLFVzpIddz2BiD59YthW2lhZXgiXuS-7sHZVfr_08-qRBDsCjvopa2GmUXGMaPP_pWeHa2As0sDk8Lsbs7_wG5JKBirjrhxrNjK3mdhi_OGUlVdYTmzOVsRTD0KThwh2ePYxmU-n-FOHTV2PN1hH0pC6QGJQ3JzaYbgt0Ik_a9E6gDVihw2Br2Fs9iO9yF1-5kjETbAjfAXUgd545rZULBrlH7CMAU7OeW5qMVz5d8KC915EKuEQuXUUBU8fvSsR8a452fHLQ106daK8gKb6_Nl8gtIYhups0vF9y7jm2lds6sys9T-bNSndOwBQ-TUQvqWKSDf5LU6_AdKrtBeO2uLUkuTQdbvDQwDXQYsoXMp6jiQsoNVJPeeuaG=w1360-h620-no?authuser=0)


<details markdown=block>
<summary markdown=span>More Screenshots</summary>
 Candidates Page
   <img src="https://lh3.googleusercontent.com/8xqsKZgbsdp7Xw6f0mOclUzeCHwpErHNeBaDLZNvaoixVSR-t6CyA8ev6S_G2602msiogyioE_ZMEyRelj5dWt66sB0lAvTQ4i9jjdWV2ujnazzX8AtgwDx0R75QJgi2rq_htvRcsF-129ZhQBhhdhBxYT0gfJafn8nn7DglijgLI8NAZBKRji9pRWrjkwvu8AJGOA13g1vmLXd8Gap_hMY0FlAVFzT6zo3THpbODiqhVB6dwxT50NVPSBuntc7DDD8_52G9rKZhlQB8_hQXlcJxd6-4ZCRTkCNTjvHIJkiFq8yb6U3OQiCYZvLp4pYz9MEJ8lJVA82XjQNVQV7rDtzNkk4t1xeafNcx9ey7mQBObSmIPVjgoiAhyzIPeGo4CTyzqhMEmmihBWqEYUTprsFP9U6JK1zUKPmAMQwQEtVNz5ik6ooPSlOytqHWAgnhn_o98-Wp7iengnNu-9j12AXR3pV57RVntR42JNINNIuMgmfWmjwLwKPOUoDKfdUXJrgKevB5a1lBEZmYOXxRrOxFhgN2SGsjBvs_f4dU625WF-3LVHRvQdgLufPCzpCHC5_aGvAq2kjjvcYDMYjJORuYRb-pl8Hll8qpqDrMgthqHGRpb2G_t83Kc-8iYKYUKacrLD6Cz6gspCMSAArGCZ4X1f29M_qevFK7DuZr_cxFwxGkUQetKDRpSeNtOM8IANFC5QSYCFDxoq7EM-_3PCyh=w1363-h625-no?authuser=0" style="max-width: 100%;">
 Search Page 
  <img src="https://lh3.googleusercontent.com/io-fXVSgUj-ztWjMgaDFhE56SWmUkC43rmZAct3gxQGwGH-e3zER5E61weseQRsHkNJ3Lcnq4BtoamDjbVYbph_aNZCxEZnIk4LL-XBYthTKwlkUJTvBdpA9N7WBv_06u2CNiWSrbgC3AWXI9DdY48bgTnm7nZeTb9LM6NuctrqKCYFkLwnn7uPe80AtI9FunYnnhSNtmRROpJUCYolgbnI4iRl9U-QgjCoIG3F6fldSWbimdB6hOR8NRXtgitFB_lHTHwI3fLQrnddftagdftSsbWnugLZstLsen0tXKGG6AnpoMjuMt_IIDvaZcPI2_RMyorD-kiSKYtsyPqdoTp6xcEE1zK6-QdKLT8d9V0hQWrpdJAWQJ8en5QYFmAipPz0mmYmkyhlsz3XwDOgCqIrEvCfz_9NmM5qLnXuPSLe0woT0MgJDAwVeNQcOEbGhip9auqO2O3xn96uGBR7ANgHGxtY7DyjixducvglKEQqcTlKViYByHagdHY81O7tSnqQJZvy5Y1KvJVIt9jr76loNqvTERBlsxmRBVlPxF1fzWBAzEmm9V2gHKlqrmk56vzACbFxSArOYBBXkZXnEncyqap3jM1dxY6b3HKcqzkIB560GwDZwOpbRnLUUOrAzYjdMJWidthQ-9XCwz7cxfHjIJgwerU_9aBTI8KV8b0mrKqcxXgzRL3A95__qXiQt5NGgZgKj7nLWxfy2hbUnucrs=w1363-h619-no?authuser=0" style="max-width: 100%;">
  Login Page 
  <img src="https://lh3.googleusercontent.com/mHX0K1ELLR6XcaUuCKKjK2PvwUJ54SqoNxt_wYyhKbDAxiPY_p8ixs89K4eEB3mvVw0ZBlOfmM-JSzzMlwRXjQUC9lBKRS4EN57wUH_Rzwe2V7msdecYbVTjL7b_DAI-4rsb7eAgIlDZzVtiXJ7TNkRRPuBxcMIUt4V3_fcLMeivyArgJknqJPb1Mw8wHKWbkobTxXWk-KyPjZBVN8J1c0u9M-w3NEwtfMIWMFl-Vd5l774XBGK87Vr2VEuLrth4-mK4CqEbQ4QU34LWcHCAOEzanfMWkKBaQq48i_almWc9Ngw-MxmGcKn253N6cykWuCWDrRtypFEYZagfSPH378a6AgAyYgxhIT8gjI4WT-0hvuJf0iz5VwV6QLag3KztlzW_5VDa5l422a65MWTPnX3IJ0oTwFHcKFUCjH4E6-ucTvfDR3Dqir8DMCrM0OHKrO8qWuYLYD1yCEfmhcyZDj5XKOfKGQGXE-nYdZgqv9l0QmnT2b84GDr1oq_n8Zoi3oKk0mNKRXfSibN5-nAJvDp53-ZTQDv3HRhE0x8dnXqPciLoGMaPUzEC4Hnsvqn0BKdmWHhtQqMie17FXA_0bBMyhSWX9t5bpV3FGLpa_cFnyXKia_jMAX-h4VPI1xuDa4FF-Ghco0t9BbS6XFF_fsbaqaCz3FNIVJ7UR4LYqYyifXIKVs-BIde_sCt3jC6PeWq4IhTlIVp8Tk4YbDuPm9u-=w1362-h623-no?authuser=0" style="max-width: 100%;">
</details>
