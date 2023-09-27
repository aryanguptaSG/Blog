import { useEffect } from "react";

function GoogleTranslate() {

    function googleTranslateElementInit() {
        new google.translate.TranslateElement(
            { pageLanguage: 'en' },
            'google_translate_element'
        );
    }

    useEffect(() => {
        const node = document.getElementById('google_translate_element');
        if (node && node.childElementCount > 0) {
            return;
        }
        var addScript = document.createElement('script');
        addScript.id = 'googleTranslateElementScript';
        addScript.setAttribute('src', "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, [])

    return (
        <div className=" bg-green-500" id="google_translate_element"></div>
    )
}

export default GoogleTranslate;