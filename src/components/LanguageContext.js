import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()
export const LanguageProvider = ({children})=>{
    const [language , setLanguage] = useState("en")
    const toggleLanguage = (lang)=>{
        //يمثل قيمة اللغة التي يتم اختيارها long
        setLanguage(lang)
        document.documentElement.lang = lang

        document.body.style.direction = lang ===  "ar" ? "rtl" : "ltr"

        // if(lang === "ar"){
        //     document.body.style.direction = "rtl"
        // }else{
        //     document.body.style.direction = "ltr"
        // }

    }
    return (
        <LanguageContext.Provider value={{language , toggleLanguage}}>

            {children}
        </LanguageContext.Provider>
    )
}
export const useLanguage = ()=> useContext(LanguageContext)