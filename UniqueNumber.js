/*
kien_the_sun Đơn giản 100 Điểm
Giới hạn ký tự: 3000 
Tiếng Việt
Cho một mảng các số nguyên trong đó mỗi số xuất hiện hai lần trừ một số,
 các phép của bạn là tìm phần tử duy nhất đó.

Dự kiến : O(n) thời gian, O(1) không gian

Ví dụ:

Với arr = [19, 17, 19, 68, 68], thì kết quả là uniqueNumber(arr) = 17.
*/
function uniqueNumber(arr) {
    arr.sort((a, b) => a - b);
    for (i = 0; i < arr.length;) {
        if (arr[i] == arr[i + 1]) {
            i+=2;
        }else{
            return arr[i];    
        }
    }
}