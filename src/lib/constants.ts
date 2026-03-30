export const NAV_LINKS = [
  { label: "회사소개", href: "/about" },
  { label: "제품소개", href: "/products" },
  { label: "설치사례", href: "/cases" },
  { label: "고객센터", href: "/support" },
  { label: "뉴스", href: "/news" },
] as const;

export const PRODUCTS = [
  {
    id: "afterburner",
    nameEn: "Smoke Eliminator",
    nameKr: "제연기",
    description:
      "촉매 산화 방식으로 로스팅 중 발생하는 연기와 냄새를 99.2% 제거합니다. 도심 매장에서도 안심하고 운영할 수 있습니다.",
    spec: "99.2% removal",
    image: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-main.png",
    imageLarge: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-main.png",
    span: "large" as const,
  },
  {
    id: "roaster",
    nameEn: "Coffee Roaster",
    nameKr: "커피 로스터기",
    description:
      "정밀한 온도 제어와 균일한 열풍 순환 시스템을 갖춘 상업용 로스터. 배치당 최대 30kg까지 처리하며, 실시간 로스팅 프로파일을 제공합니다.",
    spec: "30kg / batch",
    image: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/roaster-10kg-main.jpg",
    imageLarge: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/roaster-10kg-main.jpg",
    span: "small" as const,
  },
  {
    id: "peanut-butter",
    nameEn: "Nut Butter Machine",
    nameKr: "땅콩버터 머신",
    description:
      "견과류를 갈아 신선한 버터를 즉석에서 만드는 상업용 그라인더. 카페 메뉴 확장에 최적화된 소형 장비입니다.",
    spec: "5kg / hour",
    image: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/nutbutter-main.png",
    imageLarge: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/nutbutter-main.png",
    span: "small" as const,
  },
] as const;

export const DELIVERY_HISTORY = [
  {
    client: "서울숲 로스터스",
    product: "커피 로스터기 NBP-30R",
    date: "2025.12",
    location: "서울 성동구",
    detail:
      "15kg 로스터에서 30kg 모델로 업그레이드. 일일 처리량 3배 증가, 로스팅 프로파일 12종 커스텀 세팅 완료.",
  },
  {
    client: "카페 온도",
    product: "제연기 NBP-SE200",
    date: "2025.11",
    location: "부산 해운대구",
    detail:
      "해운대 상권 내 신축 매장. 건물 환기 규정 충족을 위해 이중 촉매 필터 시스템 설치.",
  },
  {
    client: "블랙워터 커피랩",
    product: "커피 로스터기 NBP-15R + 제연기 패키지",
    date: "2025.09",
    location: "대전 유성구",
    detail:
      "로스터리 카페 신규 오픈. 로스터기와 제연기 통합 패키지 납품, 배관 설계부터 시운전까지 원스톱 지원.",
  },
  {
    client: "모모스커피",
    product: "땅콩버터 머신 NBP-NB5",
    date: "2025.07",
    location: "광주 동구",
    detail:
      "카페 내 견과류 메뉴 라인 확장. 아몬드, 캐슈넛, 땅콩 3종 버터를 매장에서 직접 생산.",
  },
  {
    client: "한남동 브루어리",
    product: "커피 로스터기 NBP-10R",
    date: "2025.05",
    location: "서울 용산구",
    detail:
      "소규모 스페셜티 매장. 10kg 모델 납품 및 초도 로스팅 교육 3회 진행.",
  },
  {
    client: "제주 올레커피",
    product: "커피 로스터기 NBP-30R + 제연기",
    date: "2025.03",
    location: "제주 서귀포시",
    detail:
      "관광지 대형 매장. 방문 고객 대상 로스팅 체험 프로그램 운영을 위한 오픈형 설치.",
  },
  {
    client: "프릳츠 커피컴퍼니",
    product: "제연기 NBP-SE400",
    date: "2025.01",
    location: "서울 마포구",
    detail:
      "기존 로스터리 시설 환기 개선 프로젝트. 대용량 제연기 교체 및 덕트 재설계.",
  },
] as const;

export const BLOG_POSTS = [
  {
    id: 1,
    title: "로스팅 프로파일의 과학: 첫 번째 크랙 이후의 선택",
    excerpt:
      "첫 번째 크랙 이후 로스팅 시간과 온도 변화가 커피 향미에 미치는 영향을 데이터로 분석합니다. NBP-30R의 실시간 모니터링 시스템을 활용한 실험 결과를 공유합니다.",
    date: "2025.12.18",
    category: "기술 노트",
    image: "https://picsum.photos/seed/blog-roast/800/500",
    featured: true,
  },
  {
    id: 2,
    title: "도심 카페의 연기 문제, 촉매 산화로 해결하다",
    excerpt:
      "서울 도심 상권에서 로스터리 카페를 운영할 때 가장 큰 장벽인 연기 문제. NBP 제연기의 이중 촉매 필터 기술을 소개합니다.",
    date: "2025.11.04",
    category: "제품 리뷰",
    image: "https://picsum.photos/seed/blog-smoke/800/500",
    featured: false,
  },
  {
    id: 3,
    title: "견과류 메뉴가 카페 매출에 미치는 영향",
    excerpt:
      "카페에 견과류 버터 메뉴를 도입한 10개 매장의 6개월 매출 데이터를 분석했습니다.",
    date: "2025.10.22",
    category: "인사이트",
    image: "https://picsum.photos/seed/blog-nut/800/500",
    featured: false,
  },
] as const;

export const COMPANY_INFO = {
  name: "NBP_COFFEE",
  nameKr: "엔비피 커피",
  tagline: "완벽한 로스팅의 시작",
  phone: "+82 (2) 6374-8291",
  email: "hello@nbpcoffee.kr",
  address: "서울특별시 성동구 성수이로 88, 3층",
  established: "2019",
} as const;

export const FOOTER_LINKS = {
  제품: [
    { label: "커피 로스터기", href: "/products" },
    { label: "제연기", href: "/products" },
    { label: "땅콩버터 머신", href: "/products" },
    { label: "부품 및 소모품", href: "/products" },
  ],
  지원: [
    { label: "설치 가이드", href: "/support" },
    { label: "유지보수 안내", href: "/support" },
    { label: "자주 묻는 질문", href: "/support" },
    { label: "기술 지원 문의", href: "/contact" },
  ],
  회사: [
    { label: "회사 소개", href: "/about" },
    { label: "설치 사례", href: "/cases" },
    { label: "뉴스", href: "/news" },
    { label: "채용", href: "/about" },
  ],
} as const;

export const PRODUCT_DETAILS = [
  {
    id: "afterburner",
    nameEn: "Coffee Roasting Afterburner",
    nameKr: "커피로스팅 애프터버너",
    tagline: "연기, 냄새, 민원 문제 끝!",
    description:
      "엔비피코리아의 애프터버너는 커피로스팅 과정에서 발생하는 연기, 냄새, 오염물질 등을 고온에서 완전 연소시켜 완벽하게 제거하는 친환경 제품입니다. 2단 연소 및 완전 연소 고효율 덕트 버너와 컴팩트한 크기의 표면 연소 고효율 메탈 버너를 적용하여 가스비를 약 30% 이상 절감합니다.",
    features: [
      "커피로스팅 시 연기, 냄새, 유해물질 100% 제거",
      "2단 연소 및 완전 연소 고효율 덕트 버너 적용",
      "가스안전공사 검사 합격 고효율 가스 버너",
      "디지털 컨트롤러 및 비례제어 방식으로 가스비 30% 절감",
      "경기도 미세먼지 저감 신기술 공모 '6대 신기술' 선정",
      "축열식 재연소 믹싱가이드 적용 (특허 기술)",
      "200°C~1,000°C 고온 완전 연소",
      "ICT 기반 터치 패널 기술 적용 (터치 스크린)",
    ],
    specs: [
      { label: "열원", value: "LNG / LPG" },
      { label: "제어 방식", value: "디지털 컨트롤러 / 터치스크린 컨트롤러" },
      { label: "연소 온도", value: "200°C ~ 1,000°C" },
      { label: "비례 제어", value: "최대 40:1 비례제어 방식" },
      { label: "전원", value: "220V 단상 50/60Hz / 110V 단상 50/60Hz" },
      { label: "가스 압력", value: "저압 (1.0kPa~3.3kPa) / 고압 (100kPa)" },
    ],
    models: [
      { name: "NKIC-1K", capacity: "1kg", target: "소형 샘플 로스터", specs: { size: "355 × 355 × 1,183mm", burner: "표면연소 고효율 메탈버너", controller: "다단제어", connector: "도시가스 (13A)" } },
      { name: "NKIC-3K", capacity: "3kg", target: "소형 카페 로스터", specs: { size: "435 × 545 × 1,255mm", burner: "표면연소 고효율 메탈버너", controller: "다단제어", connector: "도시가스 (13A)" } },
      { name: "NKIC-5K", capacity: "5kg", target: "중소형 로스터리", specs: { size: "435 × 545 × 1,310mm", burner: "표면연소 고효율 메탈버너", controller: "디지털 컨트롤러", connector: "도시가스 (13A)" } },
      { name: "NKIC-10K", capacity: "10kg", target: "중형 로스터리 카페", specs: { size: "545 × 645 × 1,700mm", burner: "이단연소 고효율 덕트버너", controller: "디지털 컨트롤러", connector: "LPG / 도시가스 (13A)" } },
      { name: "NKIC-15K", capacity: "15kg", target: "대형 로스터리", specs: { size: "545 × 655 × 1,795mm", burner: "이단연소 고효율 덕트버너", controller: "터치스크린 컨트롤러", connector: "LPG / 도시가스 (13A)" } },
      { name: "NKIC-20K", capacity: "20kg", target: "대형 로스팅 공장", specs: { size: "545 × 655 × 1,895mm", burner: "이단연소 고효율 덕트버너", controller: "비례제어", connector: "LPG / 도시가스 (13A)" } },
      { name: "NKIC-30K", capacity: "30kg", target: "산업용 대량 로스팅", specs: { size: "645 × 655 × 1,895mm", burner: "이단연소 고효율 덕트버너", controller: "비례제어", connector: "LPG / 도시가스 (13A)" } },
      { name: "NKIC-60K", capacity: "60kg", target: "대규모 산업 시설", specs: { size: "645 × 750 × 2,190mm", burner: "이단연소 고효율 덕트버너", controller: "비례제어", connector: "LPG / 도시가스 (13A)" } },
    ],
    compatibleBrands: ["PROBAT", "GIESEN", "LORING", "FUJI ROYAL", "PROASTER", "OZTURK", "DIEDRICH", "TOPER", "BUHLER", "JOPER"],
    image: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-main.png",
    gallery: [
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-black.png",
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-white.png",
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/afterburner-metal.png",
    ],
  },
  {
    id: "roaster",
    nameEn: "Kuban Coffee Roaster",
    nameKr: "커피 로스터기",
    tagline: "정밀한 온도 제어, 균일한 결과",
    description:
      "터키 Kuban社의 커피 로스터기를 한국 공식 대리점으로서 공급합니다. Supreme 시리즈와 Base 시리즈로 구성되며, 0.5kg 샘플 로스터부터 240kg 산업용까지 폭넓은 라인업을 보유하고 있습니다. PLC & 터치스크린 소프트웨어 제어, Artisan/Cropster 호환, 맞춤형 색상 커스터마이징을 지원합니다.",
    features: [
      "열전달 방식 (Thermal Transfer) 가열 시스템",
      "PLC & 7인치 Siemens 터치스크린 제어 (옵션)",
      "Artisan / Cropster 소프트웨어 호환",
      "싱글/더블 월 드럼 선택 가능",
      "VFD (속도 가변) 에어플로우 제어",
      "쿨링 사이클론 및 안전장치 내장",
      "색상 및 디자인 커스터마이징 가능",
      "CE 인증 유럽 표준 부품 사용",
    ],
    specs: [
      { label: "시리즈", value: "Supreme (프리미엄) / Base (스탠다드)" },
      { label: "가용 용량", value: "0.5kg ~ 240kg" },
      { label: "열원", value: "LPG / 도시가스 / 전기" },
      { label: "가열 방식", value: "열전달 (Thermal Transfer)" },
      { label: "전원", value: "110~415V / 50~60Hz" },
      { label: "모터 수", value: "4개" },
    ],
    models: [
      { name: "BASE 0.5", capacity: "0.5kg", target: "샘플 로스팅 / 교육용", specs: { code: "KBN1000-M-05", size: "56 × 89 × 92cm", weight: "65kg", power: "0.72kW", burner: "5kW", gas_lpg: "0.36m³", gas_ng: "0.52m³", control: "수동 / 디지털 속도 제어" } },
      { name: "BASE 1.5", capacity: "1.5kg", target: "소형 카페 / 교육기관", specs: { code: "KBN1000-M-1.5", size: "87 × 115 × 127cm", weight: "155kg", power: "1.84kW", burner: "10kW", gas_lpg: "0.72m³", gas_ng: "1.04m³", control: "PLC 시스템 (옵션)" } },
      { name: "BASE 3", capacity: "3kg", target: "로스터리 카페", specs: { code: "KBN1000-M-3", size: "87 × 135 × 150cm", weight: "270kg", power: "1.24kW", burner: "27.5kW", gas_lpg: "1.98m³", gas_ng: "2.86m³", control: "PLC 시스템 (옵션)" } },
      { name: "BASE 5", capacity: "5kg", target: "중형 로스터리", specs: { code: "KBN1000-M-5", size: "90 × 155 × 165cm", weight: "330kg", power: "1.84kW", burner: "35kW", gas_lpg: "2.52m³", gas_ng: "3.64m³", control: "수동 / 소프트웨어 & 터치스크린" } },
      { name: "BASE 10", capacity: "10kg", target: "대형 로스터리 카페", specs: { code: "KBN1000-M-10", size: "107 × 195 × 190cm", weight: "480kg", power: "2.24kW", burner: "55kW", gas_lpg: "3.96m³", gas_ng: "5.72m³", control: "수동 / 소프트웨어 & 터치스크린 / 풀오토" } },
      { name: "BASE 15", capacity: "15kg", target: "대형 로스팅 공장", specs: { code: "KBN1000-M-15", size: "107 × 200 × 195cm", weight: "530kg", power: "2.24kW", burner: "55kW", gas_lpg: "3.96m³", gas_ng: "5.72m³", control: "수동 / 소프트웨어 & 터치스크린" } },
      { name: "BASE 20", capacity: "20kg", target: "산업용 로스팅", specs: { code: "KBN1000-M-20", size: "115 × 210 × 205cm", weight: "670kg", power: "2.24kW", burner: "35kW", gas_lpg: "2.52m³", gas_ng: "3.64m³", control: "수동 / 소프트웨어 & 터치스크린" } },
    ],
    supremeSpecs: {
      capacities: "1.8 / 3 / 6 / 12 / 18 / 24kg",
      control: "수동 / 자동",
      heating: "LPG / 도시가스",
      system: "대기압식 / 프리믹스",
      voltage: "220~380V / 50~60Hz",
      motors: "4개",
      roastTime: "8~20분",
      drum: "싱글 / 더블",
      cooling: "쿨링 사이클론 있음",
      safety: "있음",
      airflow: "VFD (속도 가변)",
      software: "Artisan / Cropster",
      display: "PLC & 7인치 Siemens 터치스크린",
      customization: "가능",
    },
    image: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/roaster-1.5kg-main.jpg",
    gallery: [
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/roaster-5kg.jpg",
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/roaster-10kg-main.jpg",
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/roaster-15kg.png",
    ],
  },
  {
    id: "peanut-butter",
    nameEn: "Nut Butter Machine · NUTS-STAR",
    nameKr: "넛버터 머신",
    tagline: "갓 만든 신선함을 경험하세요",
    description:
      "땅콩, 아몬드, 호두, 캐슈넛 등 다양한 견과류를 매장에서 바로 갈아 신선한 버터를 만드는 상업용 머신입니다. 국내 제조 특허기술(KC인증)로 국내 자체 생산하며, 가정용 220V 전원으로 사용 가능합니다. 컴팩트한 소형 크기로 설치가 쉽고 다양한 안전 기능을 갖추고 있습니다.",
    features: [
      "다양한 견과 호환 (땅콩, 아몬드, 캐슈넛, 호두 등)",
      "국내제조 특허기술 (KC인증, 국내 자체 생산)",
      "손쉬운 질감 조절 (SMOOTH ~ CRUNCHY)",
      "간편한 원터치 조작 (ON/OFF 일체형 버튼)",
      "고성능 인버터 제어 (1.5kW 고효율 모터)",
      "위생적 스테인리스 스틸 (STS304 하우징 적용)",
      "가정용 220V 전원 사용",
      "컴팩트한 소형 크기 (카운터 설치 가능)",
    ],
    specs: [
      { label: "제품명", value: "넛츠스타 (NUTS-STAR)" },
      { label: "처리 용량", value: "50kg/h (시간당 50kg 생산 가능)" },
      { label: "전원", value: "220V, 50~60Hz" },
      { label: "인버터 제어", value: "1.7kW" },
      { label: "외형 치수", value: "W254 × L600 × H680mm" },
      { label: "무게", value: "35kg" },
      { label: "재질", value: "스테인리스 스틸 (케이스)" },
      { label: "안전장치", value: "비상정지, 스위치, 이상 상태 감지 차단, 과부하 감지 차단, 접지, 절연" },
      { label: "인증", value: "전기용품 안전인증 KC인증" },
    ],
    models: [
      { name: "NUTS-STAR", capacity: "50kg/h", target: "카페 / 베이커리 / 호텔 / 레스토랑 / 견과류 매장 / 방앗간" },
    ],
    image: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/nutbutter-main.png",
    gallery: [
      "",
      "",
      "",
    ],
  },
  {
    id: "others",
    nameEn: "Industrial Equipment",
    nameKr: "기타 산업설비",
    tagline: "에너지 절감 친환경 솔루션",
    description:
      "엔비피코리아는 커피 장비 외에도 환경사업부와 연소사업부를 통해 산업용 환경설비를 공급합니다. SMART 축열식 연소 산화 장치(RTO/RCO), 직화식·간접식 가스히터, 산업용 버너 시스템 등을 설계·제조·설치합니다. Midco International U.S.A, Ecostar Turkey와의 기술 제휴를 통해 세계적 수준의 연소 기술을 보유하고 있습니다.",
    features: [
      "SMART 축열식 연소 산화 장치 (RTO/RCO)",
      "직화식 / 간접식 산업용 가스히터",
      "산업용 가스 버너 시스템",
      "자동차 도장 건조 시스템",
      "클린룸 / 드라이룸 가스히터",
      "Midco U.S.A / Ecostar Turkey 기술 제휴",
    ],
    specs: [
      { label: "환경사업부", value: "RTO, RCO, CTO, DTO, 대기오염방지시설" },
      { label: "연소사업부", value: "가스히터, 버너, 도장설비, 건조설비" },
      { label: "인증", value: "ISO 9001, ISO 14001, INNO-BIZ" },
      { label: "특허", value: "연소 기술 관련 특허 19개 등록" },
      { label: "디자인 등록", value: "15개 등록, 상표 2개 등록" },
      { label: "소재지", value: "경기도 안산시 단원구 엠티브이8로 22" },
    ],
    models: [],
    image: "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/industrial-heater.png",
    gallery: [
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/industrial-deodorizer.png",
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/industrial-diffuser.png",
      "https://chiro-web.s3.ap-northeast-2.amazonaws.com/fa/AFTERBUNNER/products/industrial-flame.png",
    ],
  },
] as const;

export const INSTALLATION_CASES = [
  {
    id: "seoul-forest",
    client: "서울숲 로스터스",
    location: "서울 성동구",
    date: "2025.12",
    product: "커피 로스터기 NBP-30R",
    summary:
      "15kg에서 30kg으로 업그레이드. 기존 배관과 전기 설비를 최소한으로 변경하면서 처리량을 3배로 확장했습니다.",
    challenge:
      "기존 매장 운영을 중단하지 않으면서 장비 교체를 진행해야 했습니다. 로스팅 공간이 협소하여 장비 반입 동선 확보가 관건이었습니다.",
    solution:
      "야간 시간대를 활용한 2일 간의 집중 설치 계획을 수립했습니다. 기존 가스 배관을 재활용하고, 전기 설비만 380V로 증설하여 비용과 시간을 절감했습니다.",
    result:
      "일일 로스팅 처리량이 45kg에서 150kg으로 증가. 로스팅 프로파일 12종을 커스텀 세팅하여 시즌별 블렌드 전환이 즉시 가능해졌습니다.",
    images: [
      "https://picsum.photos/seed/case-sf1/800/600",
      "https://picsum.photos/seed/case-sf2/800/600",
      "https://picsum.photos/seed/case-sf3/800/600",
    ],
    testimonial: {
      quote: "설치 과정에서 매장 운영에 영향이 전혀 없었습니다. NBP 팀의 사전 현장 조사가 정확했기 때문이라고 생각합니다.",
      name: "김도윤",
      role: "서울숲 로스터스 대표",
    },
  },
  {
    id: "cafe-ondo",
    client: "카페 온도",
    location: "부산 해운대구",
    date: "2025.11",
    product: "제연기 NBP-SE200",
    summary:
      "해운대 신축 매장에 이중 촉매 필터 제연기를 설치. 건물 환기 규정과 주민 민원 기준을 모두 충족했습니다.",
    challenge:
      "해운대 상권의 주거 밀집 지역에 위치하여, 건물 환기 규정뿐 아니라 근린 주민 민원 기준까지 동시에 만족해야 했습니다.",
    solution:
      "건물 옥상까지의 덕트 경로를 3D 모델링으로 사전 설계하고, 이중 촉매 필터를 적용하여 배출구에서의 잔여 냄새를 최소화했습니다.",
    result:
      "오픈 6개월간 민원 제로. 건물 관리사무소 환기 검사를 1회 만에 통과했습니다.",
    images: [
      "https://picsum.photos/seed/case-co1/800/600",
      "https://picsum.photos/seed/case-co2/800/600",
      "https://picsum.photos/seed/case-co3/800/600",
    ],
    testimonial: {
      quote: "주거 지역이라 걱정이 많았는데, 6개월째 민원이 단 한 건도 없습니다.",
      name: "박서현",
      role: "카페 온도 오너",
    },
  },
  {
    id: "blackwater",
    client: "블랙워터 커피랩",
    location: "대전 유성구",
    date: "2025.09",
    product: "로스터기 + 제연기 패키지",
    summary:
      "신규 로스터리 카페 오픈에 맞춰 로스터기와 제연기를 통합 패키지로 납품. 배관부터 시운전까지 원스톱으로 지원했습니다.",
    challenge:
      "건물 신축 단계부터 참여하여 로스팅 공간의 천장 높이, 환기 덕트 경로, 가스·전기 인입 위치를 사전에 조율해야 했습니다.",
    solution:
      "건축 설계사와 3차례 협업 미팅을 진행하고, 장비 배치도와 배관 도면을 직접 제공했습니다. 시운전 시 로스팅 교육 2회를 병행했습니다.",
    result:
      "오픈 첫 달부터 안정적인 로스팅 운영. 대전 지역 스페셜티 카페 중 최단 기간 자체 로스팅 체제 구축.",
    images: [
      "https://picsum.photos/seed/case-bw1/800/600",
      "https://picsum.photos/seed/case-bw2/800/600",
      "https://picsum.photos/seed/case-bw3/800/600",
    ],
    testimonial: {
      quote: "건축 단계부터 함께해서 공간 효율이 극대화됐습니다. 설치 후 교육까지 원스톱이라 든든했습니다.",
      name: "이정민",
      role: "블랙워터 커피랩 헤드로스터",
    },
  },
  {
    id: "jeju-olle",
    client: "제주 올레커피",
    location: "제주 서귀포시",
    date: "2025.03",
    product: "커피 로스터기 NBP-30R + 제연기",
    summary:
      "관광객 대상 로스팅 체험 프로그램 운영을 위한 오픈형 설치. 안전 가드와 관람 동선을 고려한 특수 레이아웃을 설계했습니다.",
    challenge:
      "일반 고객이 로스팅 과정을 가까이에서 관람하므로, 안전성과 시각적 개방감을 동시에 확보해야 했습니다.",
    solution:
      "강화유리 안전 가드를 맞춤 제작하고, 관람객 동선과 작업자 동선을 분리하는 ㄷ자형 레이아웃을 설계했습니다.",
    result:
      "월 평균 1,200명의 체험 프로그램 참여. 체험 고객의 원두 구매 전환율 68%를 기록.",
    images: [
      "https://picsum.photos/seed/case-jo1/800/600",
      "https://picsum.photos/seed/case-jo2/800/600",
      "https://picsum.photos/seed/case-jo3/800/600",
    ],
    testimonial: {
      quote: "관광객들이 로스팅 과정을 직접 보고, 원두를 구매하는 선순환이 만들어졌습니다.",
      name: "오하늘",
      role: "제주 올레커피 매니저",
    },
  },
] as const;

export const FAQ_DATA = [
  {
    category: "구매 상담",
    items: [
      {
        question: "장비 구매 전 현장 방문 상담이 가능한가요?",
        answer:
          "네, 서울·수도권 지역은 무료 현장 방문 상담을 제공합니다. 지방의 경우 화상 상담 후 필요 시 현장 방문을 진행합니다. 상담 신청은 문의하기 페이지나 전화로 가능합니다.",
      },
      {
        question: "견적은 어떻게 받을 수 있나요?",
        answer:
          "문의하기 페이지에서 매장 규모, 희망 장비, 설치 환경 등을 입력해주시면 영업일 기준 1일 이내에 맞춤 견적서를 보내드립니다.",
      },
      {
        question: "리스나 할부 구매가 가능한가요?",
        answer:
          "네, 제휴 금융사를 통한 36개월 무이자 할부와 운용리스를 지원합니다. 자세한 조건은 상담 시 안내드립니다.",
      },
    ],
  },
  {
    category: "설치",
    items: [
      {
        question: "설치 기간은 얼마나 걸리나요?",
        answer:
          "단일 장비 기준 1~2일, 로스터기+제연기 패키지의 경우 3~5일이 소요됩니다. 사전 현장 조사 결과에 따라 달라질 수 있으며, 매장 운영에 최소한의 영향을 주도록 일정을 조율합니다.",
      },
      {
        question: "기존 매장에 설치할 때 인테리어 공사가 필요한가요?",
        answer:
          "대부분의 경우 가스·전기 배관 조정만으로 설치가 가능합니다. 대규모 인테리어 변경이 필요한 경우 사전에 안내드리며, 제휴 시공사를 연결해드릴 수 있습니다.",
      },
      {
        question: "전국 어디서나 설치 가능한가요?",
        answer:
          "네, 제주도를 포함한 전국 설치가 가능합니다. 지방 설치의 경우 출장비가 별도 발생할 수 있으며, 정확한 비용은 견적 시 안내드립니다.",
      },
    ],
  },
  {
    category: "유지보수",
    items: [
      {
        question: "보증 기간은 어떻게 되나요?",
        answer:
          "전 제품 2년 무상 보증을 제공합니다. 보증 기간 내 제조 결함으로 인한 부품 교체 및 수리는 무상으로 진행됩니다.",
      },
      {
        question: "정기 점검 서비스가 있나요?",
        answer:
          "연 2회 정기 점검 서비스를 제공합니다. 로스터기의 경우 드럼 상태, 온도 센서 교정, 가스 안전 점검 등을 진행하며, 제연기는 촉매 필터 상태와 풍량을 점검합니다.",
      },
      {
        question: "긴급 수리가 필요할 때 대응 시간은 얼마나 되나요?",
        answer:
          "서울·수도권 지역은 접수 후 24시간 이내, 지방은 48시간 이내 기사 방문을 보장합니다. 전화 원격 진단으로 해결 가능한 경우 즉시 안내드립니다.",
      },
      {
        question: "소모품 구매는 어떻게 하나요?",
        answer:
          "필터, 센서, 베어링 등 주요 소모품은 온라인 주문 시스템을 통해 구매할 수 있습니다. 정기 점검 시 소모품 교체가 필요한 경우 현장에서 바로 교체합니다.",
      },
    ],
  },
] as const;

export const NEWS_ARTICLES = [
  {
    id: 1,
    title: "로스팅 프로파일의 과학: 첫 번째 크랙 이후의 선택",
    excerpt:
      "첫 번째 크랙 이후 로스팅 시간과 온도 변화가 커피 향미에 미치는 영향을 데이터로 분석합니다.",
    content:
      "커피 로스팅에서 첫 번째 크랙(1차 크랙)은 원두 내부의 수분이 증발하며 발생하는 결정적 순간입니다. 이 시점 이후 로스터가 선택하는 온도 곡선과 시간이 커피의 최종 향미를 결정합니다. NBP-30R의 실시간 모니터링 시스템을 활용하여 동일 생두를 5가지 다른 프로파일로 로스팅한 결과, 1차 크랙 이후 2분 30초 시점에서 산미와 바디감의 균형점이 형성되는 것을 확인했습니다. 온도 상승률을 분당 8도로 유지했을 때 가장 복합적인 향미 프로파일이 나타났으며, 12도 이상에서는 탄화가 진행되어 쓴맛이 지배적이었습니다.",
    date: "2025.12.18",
    category: "기술 노트",
    image: "https://picsum.photos/seed/news-roast/1200/600",
    featured: true,
  },
  {
    id: 2,
    title: "도심 카페의 연기 문제, 촉매 산화로 해결하다",
    excerpt:
      "서울 도심 상권에서 로스터리 카페를 운영할 때 가장 큰 장벽인 연기 문제와 NBP 제연기의 기술적 접근.",
    content:
      "서울 주요 상권에서 로스터리 카페를 운영하려면 환경 규제와 주민 민원이라는 이중 장벽을 넘어야 합니다. NBP-SE 시리즈 제연기는 이중 촉매 필터 시스템을 통해 로스팅 연기의 99.2%를 제거합니다. 첫 번째 촉매층에서 대형 입자와 유기물을 분해하고, 두 번째 촉매층에서 미세 입자와 냄새 분자를 산화시킵니다. 이 과정에서 발생하는 열은 재순환하여 에너지 효율을 높였습니다.",
    date: "2025.11.04",
    category: "제품 리뷰",
    image: "https://picsum.photos/seed/news-smoke/1200/600",
    featured: false,
  },
  {
    id: 3,
    title: "견과류 메뉴가 카페 매출에 미치는 영향",
    excerpt:
      "카페에 견과류 버터 메뉴를 도입한 10개 매장의 6개월 매출 데이터를 분석했습니다.",
    content:
      "NBP 땅콩버터 머신을 도입한 전국 10개 카페의 6개월간 매출 데이터를 추적한 결과, 견과류 버터 관련 메뉴가 전체 매출의 평균 12.4%를 차지하는 것으로 나타났습니다. 특히 아몬드 버터 라떼와 땅콩버터 토스트가 가장 높은 판매량을 기록했으며, 원가율은 기존 메뉴 대비 15% 낮아 수익성 개선에도 기여했습니다.",
    date: "2025.10.22",
    category: "인사이트",
    image: "https://picsum.photos/seed/news-nut/1200/600",
    featured: false,
  },
  {
    id: 4,
    title: "NBP_COFFEE, 2025 서울카페쇼 참가 후기",
    excerpt:
      "서울카페쇼에서 NBP-30R과 신형 제연기를 선보였습니다. 현장 반응과 주요 문의 사항을 정리합니다.",
    content:
      "2025 서울카페쇼에 3년 연속 참가하여 NBP-30R 로스터기와 신형 NBP-SE400 제연기를 전시했습니다. 올해는 특히 실시간 로스팅 시연에 대한 관심이 높았으며, 3일간 약 480건의 상담이 진행되었습니다. 가장 많은 문의는 기존 장비 교체 시 설치 일정과 비용에 관한 것이었으며, 리스 구매 조건에 대한 관심도 크게 늘었습니다.",
    date: "2025.09.15",
    category: "회사 소식",
    image: "https://picsum.photos/seed/news-show/1200/600",
    featured: false,
  },
  {
    id: 5,
    title: "로스터기 정기 점검, 왜 중요한가",
    excerpt:
      "로스터기의 수명과 성능을 유지하기 위한 정기 점검 항목과 주기를 안내합니다.",
    content:
      "커피 로스터기는 고온·고압 환경에서 작동하는 정밀 장비입니다. 정기 점검을 소홀히 하면 온도 센서 오차가 누적되어 로스팅 품질이 저하되고, 최악의 경우 안전 사고로 이어질 수 있습니다. NBP는 연 2회 정기 점검을 권장하며, 드럼 내부 상태 확인, 온도 센서 교정, 가스 안전밸브 점검, 베어링 윤활, 배기 시스템 청소 등 총 18개 항목을 체크합니다.",
    date: "2025.08.30",
    category: "유지보수",
    image: "https://picsum.photos/seed/news-maint/1200/600",
    featured: false,
  },
  {
    id: 6,
    title: "제주 올레커피, 로스팅 체험 프로그램 1만 명 돌파",
    excerpt:
      "NBP 장비로 운영 중인 제주 올레커피의 로스팅 체험 프로그램이 누적 참여자 1만 명을 달성했습니다.",
    content:
      "제주 올레커피가 NBP-30R 로스터기를 활용한 로스팅 체험 프로그램의 누적 참여자 1만 명을 달성했습니다. 이 프로그램은 관광객이 직접 생두를 선택하고 로스팅 과정을 체험한 뒤 원두를 가져가는 형태로 운영됩니다. NBP가 설계한 오픈형 레이아웃과 강화유리 안전 가드가 체험의 안전성과 몰입감을 동시에 확보하는 데 기여했습니다.",
    date: "2025.07.12",
    category: "고객 소식",
    image: "https://picsum.photos/seed/news-jeju/1200/600",
    featured: false,
  },
] as const;
