// ==========================================
// قفسه بی‌صدا - کدهای جاوا اسکریپت ساده
// ==========================================

// ---- نمایش پیام خوش‌آمدگویی هنگام بارگذاری صفحه ----
window.onload = function() {
    // فقط یک بار نمایش داده شود
    var visited = sessionStorage.getItem('visited');
    if (!visited) {
        alert('به قفسه بی‌صدا خوش آمدید!\nجایی آرام برای دوستداران کتاب 📚');
        sessionStorage.setItem('visited', 'true');
    }
};

// ---- تغییر متن بخش خوش‌آمدگویی ----
function changeWelcomeText() {
    var el = document.getElementById('welcome-msg');
    if (el) {
        var messages = [
            'کتاب بخوانید، دنیاهای تازه کشف کنید.',
            'هر کتاب پنجره‌ای رو به دنیایی دیگر است.',
            'مطالعه، بهترین سفری است که می‌توان داشت.',
            'با هر صفحه، فردای بهتری می‌سازیم.',
        ];
        var current = el.getAttribute('data-index') || '0';
        var next = (parseInt(current) + 1) % messages.length;
        el.textContent = messages[next];
        el.setAttribute('data-index', next);
    }
}

// ---- تغییر رنگ پس‌زمینه صفحه ----
var bgColors = ['#F5F1E8', '#EEF4EC', '#F0EBE3', '#ECF0F5', '#F4EEF0'];
var colorIndex = 0;

function changeBgColor() {
    colorIndex = (colorIndex + 1) % bgColors.length;
    document.body.style.backgroundColor = bgColors[colorIndex];
    var btn = document.getElementById('color-btn');
    if (btn) {
        btn.textContent = 'رنگ بعدی 🎨';
    }
}

// ---- اعتبارسنجی فرم تماس ----
function validateForm(event) {
    event.preventDefault();

    var name  = document.getElementById('name')  ? document.getElementById('name').value.trim()  : '';
    var email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
    var msg   = document.getElementById('message')? document.getElementById('message').value.trim(): '';

    if (name === '') {
        alert('لطفاً نام خود را وارد کنید.');
        return false;
    }
    if (email === '' || email.indexOf('@') === -1) {
        alert('لطفاً یک آدرس ایمیل معتبر وارد کنید.');
        return false;
    }
    if (msg === '') {
        alert('لطفاً پیام خود را بنویسید.');
        return false;
    }

    alert('پیام شما با موفقیت ارسال شد!\nبا تشکر از ارتباط شما با قفسه بی‌صدا 🌿');
    document.getElementById('contact-form').reset();
    return true;
}

// ---- نمایش/مخفی اطلاعات بیشتر کتاب ----
function toggleInfo(bookId) {
    var el = document.getElementById(bookId);
    if (el) {
        if (el.style.display === 'none' || el.style.display === '') {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
}
function toggleTheme() {
    document.body.classList.toggle("dark");
}
