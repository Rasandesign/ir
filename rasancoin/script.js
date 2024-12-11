document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // جلوگیری از ارسال فرم

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // نمایش پیغام تایید ثبت‌نام
    alert(`ثبت‌نام شما با موفقیت انجام شد!\nنام: ${name}\nایمیل: ${email}`);

    // اینجا می‌توانید کدهای دیگری برای ذخیره اطلاعات کاربر در بانک اطلاعاتی یا ارسال آن به سرور بنویسید
});