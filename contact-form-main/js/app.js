(()=>{
    /**
     * This function is used to create a new element HTML with the given TEXT and STYLES.
     * 
     * @param {HTMLElement} element 
     * @param {string} text 
     * @param {string} styles
     *  
     * @returns {HTMLElement}
     */
    const createElementHtml = (element, text, styles) => {
        element.innerText = text;
        element.classList.add(styles);

        return element;
    }

    /**
     * This function is used to create a new element HTML <IMG>.
     * 
     * @param {string} url 
     * @returns {HTMLImageElement} 
     */
    const createImgMessage = (url) => {
        const img = document.createElement('img');
        img.src = url;

        return img;
    };


    /**
     * This function is used to create a sending message after completing the form data
     * 
     * @param {void}
     * @returns {void}
     */
    const messageSend = () => {
        const SUBMIT = document.querySelector('.submit');
    
        SUBMIT.addEventListener('click', (e) =>{ 
            e.preventDefault();
    
            const ELEMENTS = [
                {element: document.createElement('h3'), text: "Message Sent", styles: "message-title-email"}, 
                {element: document.createElement('p'), text: "Thanks for completing the form. We´ll be in touch soon!", styles: "message-text-email"},
            ];
            
            const message = document.createElement('div');
    
            ELEMENTS.forEach(({element, text, styles })=>{
                if(text.toLowerCase() === "message sent"){
                    const DIV = createElementHtml(document.createElement('div'), "", 'flex');
                    DIV.appendChild(createImgMessage("./assets/images/icon-success-check.svg"));
                    DIV.appendChild(createElementHtml(element, text, styles));
    
                    message.append(DIV);
                }else{
                    message.append(createElementHtml(element, text, styles));
                }
            })
            
            SUBMIT.remove();

            message.classList.add('message-send-email');
            message.classList.add('message-send-email-animation-in');

            document.body.append(message);
            
            setTimeout(()=>{
                message.classList.add('message-send-email-animation-out');
            }, 2000);
            
            setTimeout(()=>{
                message.remove();
            }, 3000);
    
        });
    }

    messageSend();
})();