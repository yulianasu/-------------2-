 // 1. Индикатор прокрутки страницы вверху (Scroll Progress Bar)
        window.addEventListener('scroll', () => {
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById('scrollBar').style.width = scrolled + '%';
        });

        // 2. Интерактивное переключение ракурсов проектов (Гостиная / Спальня)
        function switchPhoto(projectNum, imageUrl, buttonElement) {
            const imgElement = document.getElementById('proj' + projectNum + 'Image');
            
            // Плавное затухание фото
            imgElement.style.opacity = '0';
            
            setTimeout(() => {
                imgElement.src = imageUrl;
                imgElement.style.opacity = '1';
            }, 250);

            // Переключение активного класса у кнопок внутри этого проекта
            const parentBox = buttonElement.closest('.project-switch-btns');
            parentBox.querySelectorAll('.switch-btn').forEach(btn => btn.classList.remove('active'));
            buttonElement.classList.add('active');
        }

        // 3. Динамический калькулятор с анимацией и всплывающей подсказкой
        const typeSelect = document.getElementById('objectType');
        const areaInput = document.getElementById('objectArea');
        const totalPrice = document.getElementById('totalPrice');
        const calcToast = document.getElementById('calcToast');

        function calculate() {
            const rate = parseFloat(typeSelect.value);
            const area = parseFloat(areaInput.value) || 0;
            const total = rate * area;
            
            // Форматируем число с пробелами
            totalPrice.textContent = total.toLocaleString('ru-RU') + ' ₽';

            // Анимация пульсации цифры
            totalPrice.classList.add('pulse');
            calcToast.classList.add('show');

            setTimeout(() => {
                totalPrice.classList.remove('pulse');
            }, 200);

            setTimeout(() => {
                calcToast.classList.remove('show');
            }, 1500);
        }

        typeSelect.addEventListener('change', calculate);
        areaInput.addEventListener('input', calculate);