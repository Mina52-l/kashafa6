document.addEventListener('DOMContentLoaded', function() {
            // إضافة حدث النقر لأزرار الأقسام
            const sectionButtons = document.querySelectorAll('.section-btn');
            sectionButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const targetSection = this.getAttribute('data-section');

                    // إخفاء جميع الأقسام
                    document.querySelectorAll('.content-section').forEach(section => {
                        section.classList.remove('active');
                    });

                    // إزالة النشط من جميع الأزرار
                    sectionButtons.forEach(btn => {
                        btn.classList.remove('active');
                        btn.style.backgroundColor = 'var(--primary-color)';
                    });

                    // إظهار القسم المطلوب
                    document.getElementById(targetSection).classList.add('active');

                    // إضافة تأثير للزر النشط
                    this.classList.add('active');
                    this.style.backgroundColor = 'var(--accent-color)';

                    // تفعيل تأثيرات الظهور للأقسام الجديدة
                    setTimeout(checkFade, 100);
                    setTimeout(animateNames, 200);
                });
            });

            // تأثير الظهور التدريجي للعناصر
            const fadeElements = document.querySelectorAll('.fade-in');

            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;

                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            }

            // تفعيل عند التمرير
            window.addEventListener('scroll', checkFade);
            checkFade(); // تفعيل عند التحميل

            // تأثيرات للأسماء
            const animatedNames = document.querySelectorAll('.animated-name');

            function animateNames() {
                animatedNames.forEach((name, index) => {
                    setTimeout(() => {
                        name.style.animation = `nameAnimation 0.8s ease forwards ${index * 0.1}s`;
                    }, 100);
                });
            }

            animateNames();
        });