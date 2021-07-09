/*
Một số nguyên tố được gọi là siêu nguyên tố nếu như ta lần lượt xóa các chữ số bên phải đi, ta vẫn được các số nguyên tố.

Ví dụ 2333 là một số siêu nguyên tố vì khi ta lần lượt xóa các chữ số bên phải, thì ta được các số: [233, 23, 2] đều là các số nguyên tố.

Bạn hãy giúp DAN tìm tất cả các số siêu nguyên tố bé hơn hoặc bằng n. Kết quả trả về theo thứ tự tăng dần.

Ví dụ:

Với n = 10 thì findSpecialPrime(n) = [2, 3, 5, 7].

Với n = 100 thì findSpecialPrime(n) = [2, 3, 5, 7, 23, 29, 31, 37, 53, 59, 71, 73, 79].
*/
function check(a) {
    var count = 0;
    for (var j = 2; j <= a; j++) {
        if (a % j == 0)
            count++;
    }
    if (count == 1) {
        return 1;
    }
    else {
        return 0;
    }
}


function findSpecialPrime(n) {
    let newarr = [];
    for (var i = 1; i <= n; i++) {
        if (check(i) == 1) {
            if (i < 10) {
                newarr.push(i)
            }
            else {
                var test = true;
                var a = parseInt(i / 10)
                while (a > 0) {
                    if (check(a) == 0) {
                        test = false;
                        break;
                    }
                    a = parseInt(a / 10)
                }
                if (test) {
                    newarr.push(i);
                }
            }
        }
    }
    return newarr;
}