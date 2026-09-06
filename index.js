const btnEl = document.querySelector('.btn');
const inputEl = document.getElementById('input');
const copyIconEl = document.querySelector('.fa-copy');
const alertContainerEl = document.querySelector('.alert-container');

btnEl.addEventListener('click', () => {
    createPassword();
});

copyIconEl.addEventListener('click', () => {
    copyPassword();
    if (inputEl.value) {
        // アラートを表示する
        alertContainerEl.classList.remove('active');
        // アラートを表示した後、2秒後にアラートを非表示にする
        setTimeout(() => {
            alertContainerEl.classList.add('active');
        }, 2000);
    }
});

function createPassword() {
    // 文字列の中からランダムに文字を選んでパスワードを生成する
    const chars =
        '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const passwordLength = 12;
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    inputEl.value = password;
    alertContainerEl.innerText = password + " copied!"
}   
function copyPassword() {
    inputEl.select();
    // スマホでコピーするために、選択範囲を設定する
    inputEl.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(inputEl.value);
    
}
