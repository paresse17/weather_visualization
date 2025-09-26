// Country data with coordinates and capital cities for weather API
const countriesData = [
    { name: '대한민국', lat: 37.5665, lng: 126.9780, capital: 'Seoul', code: 'KR' },
    { name: '일본', lat: 35.6762, lng: 139.6503, capital: 'Tokyo', code: 'JP' },
    { name: '중국', lat: 39.9042, lng: 116.4074, capital: 'Beijing', code: 'CN' },
    { name: '미국', lat: 38.8951, lng: -77.0364, capital: 'Washington', code: 'US' },
    { name: '영국', lat: 51.5074, lng: -0.1278, capital: 'London', code: 'GB' },
    { name: '프랑스', lat: 48.8566, lng: 2.3522, capital: 'Paris', code: 'FR' },
    { name: '독일', lat: 52.5200, lng: 13.4050, capital: 'Berlin', code: 'DE' },
    { name: '이탈리아', lat: 41.9028, lng: 12.4964, capital: 'Rome', code: 'IT' },
    { name: '스페인', lat: 40.4168, lng: -3.7038, capital: 'Madrid', code: 'ES' },
    { name: '러시아', lat: 55.7558, lng: 37.6173, capital: 'Moscow', code: 'RU' },
    { name: '캐나다', lat: 45.4215, lng: -75.6972, capital: 'Ottawa', code: 'CA' },
    { name: '브라질', lat: -15.8267, lng: -47.9218, capital: 'Brasilia', code: 'BR' },
    { name: '호주', lat: -35.2809, lng: 149.1300, capital: 'Canberra', code: 'AU' },
    { name: '인도', lat: 28.6139, lng: 77.2090, capital: 'New Delhi', code: 'IN' },
    { name: '멕시코', lat: 19.4326, lng: -99.1332, capital: 'Mexico City', code: 'MX' },
    { name: '아르헨티나', lat: -34.6037, lng: -58.3816, capital: 'Buenos Aires', code: 'AR' },
    { name: '남아프리카', lat: -25.7479, lng: 28.2293, capital: 'Pretoria', code: 'ZA' },
    { name: '이집트', lat: 30.0444, lng: 31.2357, capital: 'Cairo', code: 'EG' },
    { name: '터키', lat: 39.9334, lng: 32.8597, capital: 'Ankara', code: 'TR' },
    { name: '태국', lat: 13.7563, lng: 100.5018, capital: 'Bangkok', code: 'TH' },
    { name: '베트남', lat: 21.0285, lng: 105.8542, capital: 'Hanoi', code: 'VN' },
    { name: '인도네시아', lat: -6.2088, lng: 106.8456, capital: 'Jakarta', code: 'ID' },
    { name: '필리핀', lat: 14.5995, lng: 120.9842, capital: 'Manila', code: 'PH' },
    { name: '말레이시아', lat: 3.1390, lng: 101.6869, capital: 'Kuala Lumpur', code: 'MY' },
    { name: '싱가포르', lat: 1.3521, lng: 103.8198, capital: 'Singapore', code: 'SG' },
    { name: '뉴질랜드', lat: -41.2865, lng: 174.7762, capital: 'Wellington', code: 'NZ' },
    { name: '스웨덴', lat: 59.3293, lng: 18.0686, capital: 'Stockholm', code: 'SE' },
    { name: '노르웨이', lat: 59.9139, lng: 10.7522, capital: 'Oslo', code: 'NO' },
    { name: '핀란드', lat: 60.1699, lng: 24.9384, capital: 'Helsinki', code: 'FI' },
    { name: '덴마크', lat: 55.6761, lng: 12.5683, capital: 'Copenhagen', code: 'DK' },
    { name: '네덜란드', lat: 52.3676, lng: 4.9041, capital: 'Amsterdam', code: 'NL' },
    { name: '벨기에', lat: 50.8503, lng: 4.3517, capital: 'Brussels', code: 'BE' },
    { name: '스위스', lat: 46.9479, lng: 7.4474, capital: 'Bern', code: 'CH' },
    { name: '오스트리아', lat: 48.2082, lng: 16.3738, capital: 'Vienna', code: 'AT' },
    { name: '폴란드', lat: 52.2297, lng: 21.0122, capital: 'Warsaw', code: 'PL' },
    { name: '그리스', lat: 37.9838, lng: 23.7275, capital: 'Athens', code: 'GR' },
    { name: '포르투갈', lat: 38.7223, lng: -9.1393, capital: 'Lisbon', code: 'PT' },
    { name: '아일랜드', lat: 53.3498, lng: -6.2603, capital: 'Dublin', code: 'IE' },
    { name: '체코', lat: 50.0755, lng: 14.4378, capital: 'Prague', code: 'CZ' },
    { name: '헝가리', lat: 47.4979, lng: 19.0402, capital: 'Budapest', code: 'HU' },
    { name: '칠레', lat: -33.4489, lng: -70.6693, capital: 'Santiago', code: 'CL' },
    { name: '페루', lat: -12.0464, lng: -77.0428, capital: 'Lima', code: 'PE' },
    { name: '콜롬비아', lat: 4.7110, lng: -74.0721, capital: 'Bogota', code: 'CO' },
    { name: '베네수엘라', lat: 10.4806, lng: -66.9036, capital: 'Caracas', code: 'VE' },
    { name: '사우디아라비아', lat: 24.7136, lng: 46.6753, capital: 'Riyadh', code: 'SA' },
    { name: 'UAE', lat: 24.4539, lng: 54.3773, capital: 'Abu Dhabi', code: 'AE' },
    { name: '이스라엘', lat: 31.7683, lng: 35.2137, capital: 'Jerusalem', code: 'IL' },
    { name: '케냐', lat: -1.2921, lng: 36.8219, capital: 'Nairobi', code: 'KE' },
    { name: '나이지리아', lat: 9.0579, lng: 7.4951, capital: 'Abuja', code: 'NG' },
    { name: '모로코', lat: 34.0132, lng: -6.8326, capital: 'Rabat', code: 'MA' }
];

// Ambient sound descriptions for each weather type
// In production, replace with actual ambient sound file URLs
const ambientSoundDescriptions = {
    clear: '새들의 지저귀과 멀리서 들리는 사람들의 웅성거림',
    clouds: '부드러운 바람소리와 나뭇잎이 흔들리는 소리',
    rain: '빗방울이 떨어지는 잔잔한 소리',
    snow: '고요한 겨울 밤의 적막한 소리',
    thunderstorm: '비와 함께 멀리서 들리는 천둥소리',
    mist: '안개 속의 먼 바다 경적 소리'
};

// Sample ambient sound URLs (replace with actual ambient sounds in production)
// These would be actual ambient recordings like:
// - Birds chirping and distant city sounds for clear weather
// - Gentle wind through trees for cloudy weather
// - Soft rain falling for rainy weather
// - Quiet snowfall for snowy weather
// - Rain with thunder for storms
// - Distant fog horns for misty weather
const ambientSounds = {
    clear: 'ambient-clear.mp3',
    clouds: 'ambient-clouds.mp3',
    rain: 'ambient-rain.mp3',
    snow: 'ambient-snow.mp3',
    thunderstorm: 'ambient-storm.mp3',
    mist: 'ambient-mist.mp3'
};