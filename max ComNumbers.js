/*
hello5423 Trung bình 160 Điểm
Giới hạn ký tự: 3000
Một số được gọi là composite number khi nó không phải là số nguyên tố 
và là số nguyên dương lớn hơn 1(ví dụ 4, 6, 8, 9, ...). 
Cho một số nguyên dương n, hãy tính số lượng số composite number 
để tạo thành số n nhiều nhất có thể. Nếu không thể tạo ra được n, hãy trả về -1.

Ví dụ: 

Với n = 8. Đầu ra maxComNumbers(n) = 2
     Giải thích: Số 8 có thể tạo thành từ 2 số 4

Với n = 5. Đầu ra maxComNumbers(n) = -1
     Giải thích: Số 5 không thể tạo thành từ các số composite number
*/

function maxComNumbers(n){
        switch (n%4)
    {
        case 0 : {
            return n / 4
            break;
        }
        case 1: 
        case 2 : {
            count = (n-n%4)/4 -1
            if (count <2){
                return -1
            }else{
                return (n-n%4)/4 -1
            }
            break;
        }
        case 3 : {
            count = (n-n%4)/4 -2
            if (count < 2){
                return -1
            }else{
                return (n-n%4)/4 -1
            }
            break;
    }
}
}