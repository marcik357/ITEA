for (let i = 0; i < 10; i++) {
    for (let j = 10 - i; j > 0; j--) {
        document.write('&nbsp');
    }
    for (let k = i+1; k > 0; k--) {
        document.write('*');
    }
    document.write(`<br>`);
};
document.write(`<br>`);
// ------------------------------------
for (let i = 10; i >= 0; i--) {
    for (let j = 0; j < 10; j++) {
        document.write('&nbsp');
    }
    for (let k = i+1; k > 0; k--) {
        document.write('*');
    }
    document.write(`<br>`);
};
document.write(`<br>`);
// ------------------------------------
for (let i = 0; i < 10; i++) {
    for (let j = 10 - i; j > 0; j--) {
        document.write('&nbsp');
    }
    document.write('*');
    for (let k = i; k > 0; k--) {
        if (k > 1 && k < 10) {
            document.write('+');
        } else{
            document.write('*');
        }
    }
    document.write(`<br>`);
};
for (let i = 10; i >= 0; i--) {
    for (let j = 10 - i; j > 0; j--) {
        document.write('&nbsp');
    }
    document.write('*');
    for (let k = i; k > 0; k--) {
        if (k > 1) {
            document.write('+');
        } else {
            document.write('*');
        }
    }
    document.write(`<br>`);
};
document.write(`<br>`);
// ------------------------------------
for (let i = 0; i < 10; i++) {
    document.write('*');
    for (let j = 0; j < 10; j++) {
        if (i > 0 && i < 9) {
            document.write('_');
        } else {
            document.write('*');
        }
    }
    document.write('*');
    document.write(`<br>`);
};