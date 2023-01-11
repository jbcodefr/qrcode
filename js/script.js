const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

// Button submit
const onGenerateSubmit = (e) => {
    e.preventDefault();
    clear();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    if (url === '') {
        alert('Entrer une  URL');
    } else {
        showLoading();

        setTimeout(() => {
            hideLoading();
            generateQRCode(url, size);
            setTimeout(() => {
                // Get save url
                const saveUrl = qr.querySelector('img').src;
                // Create save button
                createSaveBtn(saveUrl);
            }, 1000);
            },1000);
    };
    const generateQRCode = (url, size) => {
        const qrcode = new QRCode('qrcode', {
            text: url,
            width: size,
            height: size,
        });
    };
}
const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'btn btn-success';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
};
const clear = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link');
    if (saveBtn) {
        saveBtn.remove();
    }
};
const showLoading = () => {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
};

const hideLoading = () => {
    const loading = document.getElementById('loading');
    loading.style.display = 'none';
};
hideLoading();


form.addEventListener('submit',onGenerateSubmit)