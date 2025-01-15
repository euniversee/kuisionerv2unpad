// Fungsi untuk menunda eksekusi    
function delay(ms) {    
    return new Promise(resolve => setTimeout(resolve, ms));    
}    
    
// Fungsi untuk menunggu elemen muncul    
function waitForElement(selector, callback) {    
    if (document.querySelector(selector)) {    
        console.log(`Elemen dengan selector ${selector} ditemukan.`);    
        callback();    
        return;    
    }    
    
    const observer = new MutationObserver(() => {    
        if (document.querySelector(selector)) {    
            console.log(`Elemen dengan selector ${selector} ditemukan.`);    
            observer.disconnect();    
            callback();    
        }    
    });    
    
    observer.observe(document.body, { childList: true, subtree: true });    
}    
    
// Fungsi untuk mengisi textarea dengan paste    
function isiTextarea() {    
    console.log("Memulai proses mengisi textarea...");    
    const textareas = document.querySelectorAll('textarea');    
    if (textareas.length === 0) {    
        console.error("Tidak ada textarea ditemukan.");    
        return;    
    }    
    console.log(`Ditemukan ${textareas.length} textarea...`);    
    
    const textToType = "Sudah bagus";    
    
    textareas.forEach(textarea => {    
        if (textarea.value.trim() !== textToType) {    
            console.log("Textarea belum terisi dengan teks yang sama, mulai mengisi...");    
            textarea.focus();    
            document.execCommand('insertText', false, textToType);    
            textarea.dispatchEvent(new Event('input', { bubbles: true }));    
            textarea.dispatchEvent(new Event('change', { bubbles: true }));    
            textarea.dispatchEvent(new Event('blur', { bubbles: true }));    
        } else {    
            console.log("Textarea sudah terisi dengan teks yang sama.");    
        }    
    });    
    
    console.log("Semua textarea telah terisi, mulai mengklik tombol 'Simpan'...");    
    klikSimpan();    
}    
    
// Fungsi untuk mengklik tombol "Simpan"    
function klikSimpan() {    
    console.log("Memulai proses klik tombol 'Simpan'...");    
    delay(2000).then(() => {    
        console.log("Menunggu 2 detik sebelum mencari tombol 'Simpan'...");    
        const simpanButton = document.querySelector('button.btn.btn-primary.normal-case.text-neutral.hover\\:text-neutral.btn-sm.w-1\\/2.lg\\:w-32.rounded-lg.ml-2');    
        if (!simpanButton) {    
            console.error("Tombol 'Simpan' tidak ditemukan.");    
            return;    
        }    
        console.log("Tombol 'Simpan' ditemukan dan diklik...");    
        simpanButton.click();    
    
        waitForElement('.modal-box .modal-action button', () => {    
            console.log("Pop-up muncul, menunggu tombol 'OK'...");    
            delay(2000).then(() => {    
                console.log("Menunggu 2 detik sebelum mencari tombol 'OK'...");    
                const okButton = document.querySelector('.modal-box .modal-action button');    
                if (!okButton) {    
                    console.error("Tombol 'OK' tidak ditemukan.");    
                    return;    
                }    
                console.log("Tombol 'OK' ditemukan dan diklik...");    
                okButton.click();    
    
                delay(2000).then(() => {    
                    console.log("Menunggu 5 detik setelah mengklik tombol 'OK'...");    
                    console.log("Proses selesai, kembali ke langkah awal...");    
                    isiKuisioner();    
                });    
            });    
        });    
    });    
}    
    
// Fungsi untuk mengisi kuisioner    
function isiKuisioner() {    
    console.log("Memulai proses isi kuisioner...");    
    delay(2000).then(() => {    
        console.log("Menunggu 2 detik sebelum mencari tombol 'Isi Kuisioner'...");    
        const isiKuisionerButton = document.querySelector('button.btn.btn-ghost.text-primary.normal-case.font-bold');    
        if (!isiKuisionerButton) {    
            console.error("Tombol 'Isi Kuisioner' tidak ditemukan.");    
            return;    
        }    
        console.log("Tombol 'Isi Kuisioner' ditemukan dan diklik...");    
        isiKuisionerButton.click();    
    
        waitForElement('button.btn.btn-primary.w-fit', () => {    
            console.log("Menunggu tombol 'Pilih' muncul...");    
            delay(2000).then(() => {    
                console.log("Menunggu 2 detik sebelum mencari tombol 'Pilih'...");    
                const pilihButtons = document.querySelectorAll('button.btn.btn-primary.w-fit');    
                if (pilihButtons.length === 0) {    
                    console.error("Tidak ada tombol 'Pilih' ditemukan.");    
                    return;    
                }    
                console.log(`Ditemukan ${pilihButtons.length} tombol 'Pilih'...`);    
    
                pilihButtons.forEach((button, index) => {    
                    console.log(`Mengklik tombol 'Pilih' ke-${index + 1}...`);    
                    button.click();    
    
                    waitForElement('input[type="radio"]', () => {    
                        console.log("Menunggu radio button muncul...");    
                        delay(2000).then(() => {    
                            console.log("Menunggu 2 detik sebelum mencari radio button...");    
                            const radioButtons = document.querySelectorAll('tbody tr td:nth-child(n+4) input[type="radio"]');    
                            if (radioButtons.length === 0) {    
                                console.error("Tidak ada radio button di kolom ke-5 sampai bawah.");    
                                return;    
                            }    
                            console.log(`Ditemukan ${radioButtons.length} radio button...`);    
    
                            function klikRadioDenganDelay(radioButtons, index) {    
                                if (index < radioButtons.length) {    
                                    console.log(`Mengklik radio button ke-${index + 1}...`);    
                                    radioButtons[index].click();    
                                    radioButtons[index].dispatchEvent(new Event('change', { bubbles: true }));    
                                    delay(5).then(() => {    
                                        klikRadioDenganDelay(radioButtons, index + 1);    
                                    });    
                                } else {    
                                    console.log("Semua radio button telah diklik, mulai mengisi textarea...");    
                                    isiTextarea();    
                                }    
                            }    
    
                            klikRadioDenganDelay(radioButtons, 0);    
                        });    
                    });    
                });    
            });    
        });    
    });    
}    
    
// Mulai proses    
isiKuisioner();    
