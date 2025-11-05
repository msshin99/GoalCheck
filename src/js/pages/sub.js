
    function setupAccordion() {
     
        const questionElements = document.querySelectorAll('.faq-item .qu');

        questionElements.forEach(qu => {
            qu.addEventListener('click', () => {
   
                const listItem = qu.closest('.faq-item');
             
                const ans = listItem.querySelector('.ans');

        
                const isOpened = listItem.classList.contains('open');

                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== listItem) {
                        item.classList.remove('open');
                        item.querySelector('.ans').style.height = '0';
                        item.querySelector('.ans').style.paddingTop = '0';
                    }
                });

                if (isOpened) {
              
                    listItem.classList.remove('open');
                    ans.style.height = '0';
                    ans.style.paddingTop = '0';
                } else {
               
                    listItem.classList.add('open');
                    
                 
                    const contentHeight = ans.querySelector('p').offsetHeight;
                    
   
                    ans.style.height = `${contentHeight}px`;
                    ans.style.paddingTop = '16px';
                }
            });
        });
    }


    window.onload = setupAccordion;