/**
 * ClotheCast - Weather OOTD Recommendation Web App
 * Core Application Logic
 */

// Recommendation Database
const ootdDatabase = {
  // Tier 1: Extremely Cold (< -5°C)
  tier1: {
    casual: {
      default: {
        top: { name: '특기모 오버핏 후드티', desc: '도톰한 특기모 안감의 오버핏 후드티로 터틀넥과 레이어드해 머리와 귀까지 보온성을 높이세요.', tags: ['#헤비웨이트', '#특기모'] },
        bottom: { name: '밍크 기모 조거팬츠', desc: '벨벳 느낌의 밍크 안감이 가득 차 있어 매서운 칼바람에도 하체를 철저하게 보호합니다.', tags: ['#밍크기모', '#방한팬츠'] },
        outer: { name: '구스다운 롱패딩 파카', desc: '무릎 밑까지 감싸주는 구스다운 충전재의 롱패딩으로 한파 경보 상황에도 몸짱을 지킵니다.', tags: ['#롱패딩', '#구스다운'] },
        shoes: { name: '플리스 안감 스노우 패딩 슈즈', desc: '내부에 털이 충전되어 따뜻하며 발끝 시림을 방지해주는 방한용 부츠형 스니커즈입니다.', tags: ['#방한화', '#패딩슈즈'] },
        point: { name: '헤비 짜임 니트 비니', desc: '벌키하게 짜여진 볼륨 비니로 열이 빠져나가는 정수리와 귀를 포근히 덮어줍니다.', tags: ['#니트비니', '#체온보호'] }
      },
      male: {
        top: { name: '레이어드 터틀넥 + 특기모 후드', desc: '기모 후드 아래 보온성이 뛰어난 발열 폴라 티셔츠를 레이어드하여 바람을 이중 차단합니다.', tags: ['#레이어드', '#기모후드'] }
      },
      female: {
        bottom: { name: '기모 조거팬츠 & 발열 타이즈', desc: '바람이 통하지 않는 기모 조거팬츠 내부에 얇은 발열 레깅스를 착용해 이중으로 보온합니다.', tags: ['#발열레깅스', '#조거팬츠'] }
      }
    },
    office: {
      default: {
        top: { name: '파인 엑스트라 울 터틀넥', desc: '고급 울 가닥으로 부드럽게 짜인 고밀도 하이넥 니트로 목 전체에 우아함과 따뜻함을 줍니다.', tags: ['#울터틀넥', '#겨울니트'] },
        bottom: { name: '본딩 가공 기모 슬랙스', desc: '원단 안쪽에 극세사 플리스를 본딩 처리하여 외관은 칼주름 슬랙스핏, 내부는 극도의 따스함을 자랑합니다.', tags: ['#기모슬랙스', '#오피스웨어'] },
        outer: { name: '핸드메이드 헤비 더블 코트', desc: '두툼한 이중지 울 원단과 누빔 안감이 매치되어 칼날 같은 칼바람에도 격식을 유지해주는 코트입니다.', tags: ['#울코트', '#헤비아우터'] },
        shoes: { name: '천연 양가죽 첼시 부츠', desc: '발목 위까지 깔끔하게 덮어주는 첼시 부츠로, 보온용 울 인솔을 깔아 세련된 오피스 룩을 완성합니다.', tags: ['#첼시부츠', '#레더부츠'] },
        point: { name: '100% 캐시미어 머플러', desc: '피부 자극이 없는 퓨어 캐시미어 머플러로 가볍고 우아하게 목을 보호합니다.', tags: ['#캐시미어', '#목도리'] }
      },
      male: {
        outer: { name: '클래식 캐시미어 발마칸 코트', desc: '경량 패딩 조끼를 안에 레이어드하고 고중량 캐시미어 발마칸 코트를 입어 클래식하게 방한합니다.', tags: ['#발마칸코트', '#신사코디'] }
      },
      female: {
        bottom: { name: '울 헤링본 스커트 & 울 타이즈', desc: '도톰한 헤링본 짜임의 기모 울 스커트와 함께 150데니어 이상의 겨울용 타이즈를 매치합니다.', tags: ['#헤링본스커트', '#따뜻한스커트'] }
      }
    },
    street: {
      default: {
        top: { name: '그래픽 자카드 니트 풀오버', desc: '볼드한 스트릿 그래픽이 수놓인 오버사이즈 헤비 니트로 개성과 겨울철 포근함을 동시에 확보합니다.', tags: ['#그래픽니트', '#스트릿웨어'] },
        bottom: { name: '헤비 생지 와이드 데님', desc: '빳빳하고 두꺼운 14.5온스 로우 데님으로 겨울철 칼바람을 묵직하게 튕겨내 줍니다.', tags: ['#와이드데님', '#생지데님'] },
        outer: { name: '글로시 유광 숏 푸퍼 패딩', desc: '트렌디한 유광 코팅 원단과 풍성한 덕다운 충전재가 적용되어 존재감을 드높이는 아우터입니다.', tags: ['#유광패딩', '#크롭푸퍼'] },
        shoes: { name: '스웨이드 플랫폼 워커 부츠', desc: '아웃솔이 두껍고 탄탄한 어글리 하이탑 부츠로 미끄러운 겨울 길바닥도 안정감 있게 내딛습니다.', tags: ['#플랫폼부츠', '#워커'] },
        point: { name: '볼드 체인 장식 니트 버킷햇', desc: '체인 장식이 슬쩍 늘어진 스트릿 감성 버킷햇으로 칼바람을 막고 스타일을 더합니다.', tags: ['#버킷햇', '#겨울아이템'] }
      }
    },
    minimal: {
      default: {
        top: { name: '메리노 울 하프 집업 니트', desc: '카라 깃을 세워 목까지 따뜻하게 덮거나 내려서 이너 셔츠를 노출시킬 수 있는 만능 집업 니트입니다.', tags: ['#하프집업', '#메리노울'] },
        bottom: { name: '원턱 와이드 슬랙스 팬츠', desc: '핀턱 주름이 흘러내려 다리가 길어 보이고 실루엣이 우아한 도톰한 두께의 윈터 슬랙스입니다.', tags: ['#원턱와이드', '#미니멀팬츠'] },
        outer: { name: '오버핏 발마칸 로브 코트', desc: '어깨 라인이 둥글게 떨어져 몸의 실루엣을 미니멀하게 잡아주는 로브 디테일의 하이엔드 울 코트입니다.', tags: ['#발마칸', '#미니멀코트'] },
        shoes: { name: '스퀘어토 가죽 첼시 부츠', desc: '앞코가 각진 쉐입의 스퀘어토 가죽 부츠로 미니멀한 착장의 미적인 완성도를 높입니다.', tags: ['#스퀘어토', '#첼시부츠'] },
        point: { name: '솔리드 레더 터치 스킨 장갑', desc: '스마트폰 터치가 가능하고 디테일이 생략된 미니멀한 블랙 레더 장갑입니다.', tags: ['#가죽장갑', '#레더글러브'] }
      }
    }
  },

  // Tier 2: Cold (-4°C ~ 4°C)
  tier2: {
    casual: {
      default: {
        top: { name: '헤비 오버핏 스웨트셔츠', desc: '복원력이 뛰어나고 세탁에 강한 텐타 덤블 가공 기모 맨투맨입니다.', tags: ['#맨투맨', '#데일리'] },
        bottom: { name: '테이퍼드 핏 코듀로이 팬츠', desc: '따뜻한 골지 골덴 원단으로 레트로하면서도 귀여운 캐주얼 감성을 뿜어내는 바지입니다.', tags: ['#골덴바지', '#코듀로이'] },
        outer: { name: '볼륨 후드 덕다운 숏패딩', desc: '포근하고 가벼운 덕다운 충전재의 숏 푸퍼 자켓으로 활동성을 살렸습니다.', tags: ['#숏패딩', '#푸퍼'] },
        shoes: { name: '천연 가죽 스니커즈 (with 울삭스)', desc: '클래식 레더 스니커즈에 두툼한 윈터 울 양말을 배치하여 발밑 온도를 상승시킵니다.', tags: ['#화이트스니커즈', '#울양말'] },
        point: { name: '비비드 포인트 니트 머플러', desc: '자칫 칙칙해지기 쉬운 겨울 코디에 따뜻하고 선명한 포인트를 주는 컬러 스카프입니다.', tags: ['#컬러머플러', '#포인트코디'] }
      }
    },
    office: {
      default: {
        top: { name: '파인 메리노 숄 카라 가디건', desc: '밀도 높은 숄카라 짜임의 가디건으로 셔츠 위에 단정하게 걸치기 좋습니다.', tags: ['#숄카라가디건', '#니트웨어'] },
        bottom: { name: '테일러드 기모 치노 팬츠', desc: '탄탄하고 깔끔한 치노 실루엣에 미세 기모가 올려져 출퇴근에 제격인 두꺼운 코튼 팬츠입니다.', tags: ['#치노팬츠', '#웜치노'] },
        outer: { name: '캐시미어 싱글 브레스티드 코트', desc: '3버튼 싱글 타입의 포멀 캐시미어 코트로 수트 재킷 위에 덧입기 최적화된 아우터입니다.', tags: ['#싱글코트', '#비즈니스룩'] },
        shoes: { name: '클래식 레더 더비 슈즈', desc: '은은한 광택감이 돋보이는 소가죽 더비 슈즈로 양말을 단정한 톤으로 신어 코디합니다.', tags: ['#더비슈즈', '#소가죽'] },
        point: { name: '사피아노 레더 브리프케이스', desc: '스크래치에 강한 사피아노 가죽으로 만들어진 비즈니스용 가방입니다.', tags: ['#브리프케이스', '#오피스백'] }
      }
    },
    street: {
      default: {
        top: { name: '하프 집업 기모 카라 아노락', desc: '스포티하면서도 스트릿한 실루엣을 자아내며 찬바람에 입기 아주 좋은 아노락 티셔츠입니다.', tags: ['#아노락', '#스트릿패션'] },
        bottom: { name: '와이드 카고 나일론 조거팬츠', desc: '내부에 얇은 플리스가 덧대어진 나일론 팬츠로 힙한 스트릿 실루엣을 잡아줍니다.', tags: ['#카고조거', '#나일론팬츠'] },
        outer: { name: '플리스 배색 레더 무스탕 자켓', desc: '칼라 부분에 풍성한 덤블 플리스가 패치된 라이더 무스탕으로 강렬한 포스를 전달합니다.', tags: ['#무스탕', '#시크룩'] },
        shoes: { name: '트렌디 청키 하이탑 스니커즈', desc: '밑창이 불룩한 어글리 하이탑 스니커즈로 조거팬츠나 와이드팬츠와 궁합이 훌륭합니다.', tags: ['#청키화', '#어글리슈즈'] },
        point: { name: '나일론 유틸리티 메신저 숄더백', desc: '스트랩 곳곳에 D링과 수납 포켓이 많아 기능적이고 힙한 스트릿 가방입니다.', tags: ['#메신저백', '#테크웨어'] }
      }
    },
    minimal: {
      default: {
        top: { name: '모크넥 파인 니트 풀오버', desc: '목 중간 높이까지 올라와 조이지 않고 단정하게 얼굴선을 정리해주는 하프폴라 니트입니다.', tags: ['#모크넥', '#파인니트'] },
        bottom: { name: '세미 와이드 크롭 흑청 데님', desc: '밑단이 깔끔하게 커팅된 그레이시 블랙 데님으로 미니멀하고 슬림한 느낌을 강조합니다.', tags: ['#흑청데님', '#크롭진'] },
        outer: { name: '울 카라 쇼트 점퍼', desc: '카라 깃 디테일과 심플한 스냅 버튼만으로 세련됨을 극대화한 미니멀리즘 크롭 재킷입니다.', tags: ['#크롭재킷', '#울점퍼'] },
        shoes: { name: '가죽 스퀘어토 더비 슈즈', desc: '불필요한 디테일을 모두 제거하고 날렵하게 깎인 스퀘어토 더비 슈즈입니다.', tags: ['#더비슈즈', '#스퀘어토'] },
        point: { name: '비건 레더 사첼백', desc: '미니멀한 사각형 쉐입에 버클로 포인트를 주어 세련되고 깔끔한 숄더 레더백입니다.', tags: ['#레더사첼백', '#숄더백'] }
      }
    }
  },

  // Tier 3: Chilly (5°C ~ 11°C)
  tier3: {
    casual: {
      default: {
        top: { name: '벌키 케이블 짜임 라운드 니트', desc: '패턴 짜임이 입체적인 라운드넥 니트로 속에 옥스포드 셔츠와 매칭하기 좋습니다.', tags: ['#케이블니트', '#가을겨울'] },
        bottom: { name: '원턱 와이드 루즈핏 데님', desc: '허리 부분에 턱이 잡혀 있어 볼륨감 있는 하체 실루엣을 만드는 생지 와이드 청바지입니다.', tags: ['#와이드데님', '#턱팬츠'] },
        outer: { name: '코듀로이 카라 데님 트러커 자켓', desc: '두툼한 데님 바디에 깃 부분 코듀로이 웜업 매치로 보온성과 스타일을 챙긴 재킷입니다.', tags: ['#청자켓', '#트러커'] },
        shoes: { name: '스웨이드 재질 헤리티지 스니커즈', desc: '포근하고 따뜻해 보이는 질감의 베이지 스웨이드 로우탑 스니커즈입니다.', tags: ['#스웨이드', '#헤리티지'] },
        point: { name: '오버 숄더 캔버스 크로스백', desc: '어깨에 두텁게 감아 매는 대용량 메신저 백으로 캐주얼의 편안한 맛을 끌어올립니다.', tags: ['#크로스백', '#캔버스백'] }
      }
    },
    office: {
      default: {
        top: { name: '스탠다드 드레스 셔츠 & 니트 베스트', desc: '클래식한 스트라이프 셔츠 위에 단정한 울 V넥 베스트를 레이어드해 스마트함을 줍니다.', tags: ['#셔츠레이어드', '#니트조끼'] },
        bottom: { name: '노턱 스트레이트 핏 울 슬랙스', desc: '군더더기 없는 슬림 일자 라인으로 포멀 비즈니스 착장의 기반을 마련해줍니다.', tags: ['#스트레이트핏', '#슬랙스'] },
        outer: { name: '클래식 개버딘 트렌치 코트', desc: '탄탄하고 힘 있는 코튼 개버딘 원단으로 제작되어 펄럭이는 실루엣이 멋스러운 오리지널 트렌치입니다.', tags: ['#트렌치코트', '#클래식웨어'] },
        shoes: { name: '가죽 페니 로퍼 (with 리브삭스)', desc: '발등 가죽 홈에 페니 동전을 넣는 정통 디자인으로 출퇴근용으로 최적입니다.', tags: ['#로퍼', '#페니로퍼'] },
        point: { name: '실버 스틸 메탈 아날로그 워치', desc: '클래식한 메탈 스트랩과 깔끔한 다이얼로 프로페셔널한 인상을 남기는 시계입니다.', tags: ['#메탈시계', '#클래식워치'] }
      }
    },
    street: {
      default: {
        top: { name: '데미지 디테일 와이드 니트', desc: '밑단과 소매끝에 자연스럽게 찢어진 데미지 포인트를 가미한 스트릿 무드의 니트웨어입니다.', tags: ['#데미지니트', '#오버핏'] },
        bottom: { name: '벌룬 볼륨핏 카고 카펜터 팬츠', desc: '망치 고리와 사이드 유틸리티 포켓이 돋보이는 넉넉한 하이 스트릿 팬츠입니다.', tags: ['#카펜터팬츠', '#벌룬핏'] },
        outer: { name: '헤비 울 배색 바시티 자켓', desc: '몸판은 고중량 울, 소매는 가죽 배색으로 캐주얼하고 힙한 매력을 어필하는 점퍼입니다.', tags: ['#바시티자켓', '#야구점퍼'] },
        shoes: { name: '스케이트보드용 벌커나이즈드 화', desc: '발목 보호와 힙한 맛을 주며 두툼한 신발 끈이 눈에 띄는 보드화 스타일 운동화입니다.', tags: ['#보드화', '#청키스니커즈'] },
        point: { name: '코튼 캠프 캡 (with 스트랩)', desc: '낮은 깊이와 플랫한 챙을 가진 스트릿 헤드웨어의 상징적인 아이템입니다.', tags: ['#캠프캡', '#스트릿캡'] }
      }
    },
    minimal: {
      default: {
        top: { name: '실켓 롱슬리브 티셔츠', desc: '광택감이 도는 실켓 코튼으로 단품 혹은 자켓 속 이너웨어로 아주 깔끔한 터치감을 줍니다.', tags: ['#실켓티셔츠', '#롱슬리브'] },
        bottom: { name: '딥 원턱 스트레이트 크림 슬랙스', desc: '차분한 크림 톤에 딥 핀턱이 잡혀 있어 밝고 우아한 느낌을 물씬 주는 바지입니다.', tags: ['#크림슬랙스', '#와이드팬츠'] },
        outer: { name: '세미오버 캐시미어 블레이저', desc: '어깨 패드가 얇게 내장되어 딱 떨어지는 핏감을 자아내며 도시적인 미니멀리즘을 선사하는 자켓입니다.', tags: ['#블레이저', '#캐시미어자켓'] },
        shoes: { name: '레더 슬립온 클로그', desc: '발등을 가죽으로 부드럽게 감싸고 뒷축이 트여 있는 세련되고 미니멀한 슬립온입니다.', tags: ['#클로그', '#레더슈즈'] },
        point: { name: '스퀘어 미니 크로스백', desc: '스마트폰과 에어팟만 쏙 들어갈 미니멀리즘 가죽 파우치 형태의 세련된 가방입니다.', tags: ['#미니크로스백', '#스퀘어백'] }
      }
    }
  },

  // Tier 4: Cool (12°C ~ 16°C)
  tier4: {
    casual: {
      default: {
        top: { name: '스트라이프 보트넥 롱슬리브', desc: '넥라인이 가로로 넓게 트여 시원해 보이며 단정한 스트라이프 패턴을 얹은 티셔츠입니다.', tags: ['#단가라티', '#보트넥'] },
        bottom: { name: '레귤러 스트레이트 데님 진', desc: '유행 타지 않는 일자핏 중청 청바지로 롤업해서 양말 포인트를 주기 좋습니다.', tags: ['#데님팬츠', '#일자바지'] },
        outer: { name: '루즈핏 코튼 블루종 자켓', desc: '가볍고 탄탄한 코튼 소재 블루종으로 소매와 밑단 보정 밴딩으로 단정히 떨어집니다.', tags: ['#블루종', '#가벼운아우터'] },
        shoes: { name: '스포티 클래식 러닝 캔버스화', desc: '오랜 시간 걸어도 발이 피로하지 않으며 어느 룩에도 찰떡 매치인 가벼운 단화입니다.', tags: ['#단화', '#캔버스'] },
        point: { name: '워싱 코튼 레트로 볼캡', desc: '물 빠진 듯한 빈티지한 오렌지나 그린 워싱이 가미되어 모던 캐주얼한 느낌을 완성합니다.', tags: ['#빈티지볼캡', '#모자코디'] }
      }
    },
    office: {
      default: {
        top: { name: '링클프리 오피스 드레스 셔츠', desc: '구김 방지 가공으로 하루 종일 칼핏을 유지해주는 깔끔하고 클래식한 비즈니스 셔츠입니다.', tags: ['#링클프리', '#화이트셔츠'] },
        bottom: { name: '테이퍼드 슬링 슬랙스', desc: '허리 양옆에 숨겨진 밴딩으로 극강의 편안함을 선사하면서 슬림한 실루엣을 내주는 바지입니다.', tags: ['#밴딩슬랙스', '#테이퍼드핏'] },
        outer: { name: '체크 헤링본 숏 블레이저', desc: '가벼운 체크 무늬가 드리워진 세련된 오피스 무드의 원버튼 재킷입니다.', tags: ['#블레이저', '#헤링본자켓'] },
        shoes: { name: '로브 스티치 가죽 로퍼', desc: '어퍼 가죽에 손바느질 스티치가 멋을 불어넣어 가을/봄 감성을 선사하는 가죽 구두입니다.', tags: ['#레더로퍼', '#로브로퍼'] },
        point: { name: '스마트 워치 & 가죽 스트랩', desc: '전자기기의 똑똑함에 세련된 브라운 레더 스트랩을 매치하여 포인트를 줍니다.', tags: ['#스마트워치', '#가죽스트랩'] }
      }
    },
    street: {
      default: {
        top: { name: '헤비 그래픽 긴팔 티셔츠', desc: '볼드한 그래픽 아트를 등판에 인쇄하여 뒤태에서 강한 개성을 연출하는 티셔츠입니다.', tags: ['#그래픽티', '#긴팔티'] },
        bottom: { name: '와이드 카고 스트링 테크팬츠', desc: '밑단에 조절 가능한 스트링이 있어 조거와 오버핏 두 가지 연출을 다 해내는 얇은 나일론 바지입니다.', tags: ['#테크웨어', '#조거카고'] },
        outer: { name: '후드 탈부착 유틸리티 야상 점퍼', desc: '바스락거리는 촉감의 원단으로 야외 스트릿 및 캐주얼 아웃도어용으로 매우 힙한 아우터입니다.', tags: ['#야상점퍼', '#개성코디'] },
        shoes: { name: '레트로 테니스 스타일 하이탑 슈즈', desc: '클래식 테니스 스니커즈 실루엣에 발목 스트랩이 가미되어 힙함을 고조시키는 운동화입니다.', tags: ['#하이탑', '#테니스화'] },
        point: { name: '나일론 키링 미니 슬링백', desc: '몸에 딱 붙어 액티브한 움직임에도 지장 없는 초경량 가슴가방입니다.', tags: ['#슬링백', '#유틸리티백'] }
      }
    },
    minimal: {
      default: {
        top: { name: '플랫 니트 카라 셔츠', desc: '부드러운 세미 파인 니트 조직의 긴팔 카라 티셔츠로 댄디함과 편안함이 공존합니다.', tags: ['#카라니트', '#가을코디'] },
        bottom: { name: '세미 와이드 그레이 생지 데님', desc: '오묘한 흑회색의 매력을 뿜어내는 묵직하고 심플한 일자 라인 슬림 데님 바지입니다.', tags: ['#생지데님', '#그레이진'] },
        outer: { name: '비건 레더 미니 카라 자켓', desc: '지퍼 라인과 미니멀한 카라 깃 디테일만 남긴 초경량 시크 가죽 점퍼입니다.', tags: ['#가죽자켓', '#비건레더'] },
        shoes: { name: '독일군 가죽 스니커즈', desc: '가죽과 스웨이드가 우아한 라인으로 조합되어 유행을 타지 않는 고품격 미니멀 단화입니다.', tags: ['#독일군', '#미니멀스니커즈'] },
        point: { name: '솔리드 레더 스퀘어 숄더백', desc: '직사각형의 날카로운 단면이 시크한 아우라를 더하는 미니멀리즘 레더 숄더백입니다.', tags: ['#숄더백', '#레더백'] }
      }
    }
  },

  // Tier 5: Mild (17°C ~ 22°C)
  tier5: {
    casual: {
      default: {
        top: { name: '베이직 피그먼트 맨투맨', desc: '내추럴하게 염색된 색감이 코지한 분위기를 연출하며 데일리 단품으로 최적인 피그먼트 스웨트셔츠입니다.', tags: ['#피그먼트', '#맨투맨'] },
        bottom: { name: '테이퍼드 원턱 치노 코튼팬츠', desc: '바지통이 아래로 갈수록 부드럽게 좁아져 깔끔하고 편안한 캐주얼룩을 제공합니다.', tags: ['#치노팬츠', '#면바지'] },
        outer: { name: '초경량 V넥 패딩 조끼 (or 가디건)', desc: '기온차가 발생할 수 있으니 아침/저녁에 어깨에 살짝 걸칠 수 있는 니트 가디건이나 경량 조끼입니다.', tags: ['#가디건', '#가벼운레이어드'] },
        shoes: { name: '헤리티지 캔버스 스니커즈', desc: '로우탑 실루엣의 로고 레트로 캔버스화로 어느 바지에나 매치가 편합니다.', tags: ['#단화', '#데일리화'] },
        point: { name: '워싱 나일론 메신저 숄더백', desc: '가벼운 생활방수가 가능한 바스락 질감으로 캐주얼하고 넉넉한 수납을 제공합니다.', tags: ['#메신저백', '#나일론백'] }
      },
      male: {
        top: { name: '오버핏 옥스포드 셔츠', desc: '적당히 빳빳하고 내추럴한 소매 롤업이 어울리는 루즈핏 옥스포드 코튼 셔츠입니다.', tags: ['#옥스포드셔츠', '#남방'] }
      },
      female: {
        top: { name: '크롭 와플 긴팔 스웨터', desc: '골지형 와플 짜임으로 제작되어 실루엣을 사랑스럽게 연출해주는 크롭 긴팔 티셔츠입니다.', tags: ['#크롭티', '#와플니트'] }
      }
    },
    office: {
      default: {
        top: { name: '모던 오픈카라 롱 셔츠', desc: '넥라인이 조이지 않고 자연스럽게 벌어져 댄디하고 세련되어 보이는 긴팔 셔츠입니다.', tags: ['#오픈카라', '#단정셔츠'] },
        bottom: { name: '원턱 쿨 링클프리 슬랙스', desc: '가벼우며 찰랑거리는 소재로 칼주름을 보존해 포멀한 멋을 주는 오피스 슬랙스입니다.', tags: ['#찰랑슬랙스', '#오피스룩'] },
        outer: { name: '이지 드레이프 가벼운 블레이저', desc: '두껍지 않고 시원하며 부드럽게 흐르듯 떨어지는 간절기용 홑겹 자켓입니다.', tags: ['#봄여름자켓', '#싱글블레이저'] },
        shoes: { name: '스웨이드 테슬 로퍼', desc: '발등에 귀여운 가죽 솔이 달린 스웨이드 로퍼로 발끝에 한 끗 품격을 더해줍니다.', tags: ['#테슬로퍼', '#스웨이드구두'] },
        point: { name: '슬림 레더 벨트 & 모던 워치', desc: '과하지 않은 슬림한 두께의 레더 벨트로 포멀한 격식을 차분히 잡아줍니다.', tags: ['#가죽벨트', '#비즈니스포인트'] }
      }
    },
    street: {
      default: {
        top: { name: '그래픽 빈티지 긴팔 스웨트', desc: '과감하게 물 빠진 듯한 빈티지 나염 프린팅으로 거친 스트릿 분위기를 뿜는 아노락/맨투맨입니다.', tags: ['#빈티지맨투맨', '#그래픽스웨트'] },
        bottom: { name: '와이드 카고 나일론 벌룬팬츠', desc: '무릎 부분 턱 주름으로 극단적으로 퍼지는 벌룬핏을 완성한 힙스터 스트릿 팬츠입니다.', tags: ['#벌룬팬츠', '#카고팬츠'] },
        outer: { name: '루즈핏 코치 윈드 점퍼', desc: '카라 깃에 똑딱이 단추 디테일이 슬며시 얹어진 오버핏 후드/코치 아웃도어용 자켓입니다.', tags: ['#코치자켓', '#스트릿자켓'] },
        shoes: { name: '볼드 레트로 청키 트랙슈즈', desc: '여러 가죽 패턴이 그물망 구조로 디자인되어 아방가르드하고 묵직한 오버사이즈 신발입니다.', tags: ['#트랙슈즈', '#청키슈즈'] },
        point: { name: '틴트 렌즈 메탈 선글라스', desc: '오렌지 혹은 엘로우 틴트 렌즈가 매칭되어 눈동자가 비치며 트렌디함을 줍니다.', tags: ['#틴트선글라스', '#틴트안경'] }
      }
    },
    minimal: {
      default: {
        top: { name: '루즈 가터 아크릴 니트웨어', desc: '짜임이 곱고 보풀이 안 일어나는 매끄러운 단색 파스텔 톤 가디건/니트웨어입니다.', tags: ['#가디건코디', '#아크릴니트'] },
        bottom: { name: '스트레이트 핏 아이보리 진', desc: '따스한 아이보리 면사로 직조되어 핏이 아래로 곧게 떨어져 시크하고 깔끔합니다.', tags: ['#아이보리진', '#화이트팬츠'] },
        outer: { name: '미니멀 반오픈 풀오버 니트조끼', desc: '셔츠나 롱슬리브 위에 슬쩍 얹어 레이어링을 고급스럽게 해주는 아이템입니다.', tags: ['#니트베스트', '#레이어드'] },
        shoes: { name: '모던 레더 더비 슈즈', desc: '얄팍한 라스트의 오리지널 플랫 더비 슈즈로 양말 경계를 깔끔히 처리합니다.', tags: ['#더비슈즈', '#미니멀구두'] },
        point: { name: '비건 레더 미니 포켓백', desc: '미니멀한 쉐입으로 상체 라인을 슬림하게 연출하는 세련된 숄더백입니다.', tags: ['#미니멀가방', '#가죽백'] }
      }
    }
  },

  // Tier 6: Warm (23°C ~ 27°C)
  tier6: {
    casual: {
      default: {
        top: { name: '프리미엄 20수 코튼 반팔 티셔츠', desc: '비침 없이 적당히 탄탄하며 자연스럽게 떨어지는 체형 커버용 루즈핏 반팔 티셔츠입니다.', tags: ['#반팔티', '#기본반팔'] },
        bottom: { name: '버뮤다 핀턱 코튼 반바지', desc: '무릎 선까지 여유롭게 덮어주어 허벅지가 도드라져 보이지 않는 와이드 하프 팬츠입니다.', tags: ['#버뮤다팬츠', '#반바지'] },
        outer: { name: '자켓 불필요 (더운 날씨)', desc: '낮에는 해가 뜨거우므로 자켓은 필요 없으며, 냉방 대비용 얇은 반팔 셔츠 레이어드를 추천합니다.', tags: ['#노아우터', '#쿨비즈'] },
        shoes: { name: '벌커나이즈드 슬립온 스니커즈', desc: '끈이 없이 신속하게 착용 가능한 가볍고 청량감 도는 캔버스 소재 단화입니다.', tags: ['#슬립온', '#가벼운신발'] },
        point: { name: '키링 에코 캔버스백', desc: '원하는 인형 키링을 달아 개성을 표현할 수 있는 시원하고 네추럴한 천가방입니다.', tags: ['#에코백', '#키링포인트'] }
      }
    },
    office: {
      default: {
        top: { name: '린넨 블렌드 하프 오픈셔츠', desc: '통풍성이 최상인 마(Linen) 소재와 텐셀이 혼방되어 터치감이 시원한 셔츠입니다.', tags: ['#린넨셔츠', '#여름오피스'] },
        bottom: { name: '경량 쿨텍스 슬림핏 슬랙스', desc: '피부에 엉겨 붙지 않는 특수 기능성 원사를 사용해 실외 도보 시에도 쾌적함을 줍니다.', tags: ['#쿨슬랙스', '#시원한바지'] },
        outer: { name: '자켓 필요 없음', desc: '충분히 후덥지근한 날씨로 아우터는 착용하지 마시고 긴팔 셔츠 소매를 롤업해 연출하세요.', tags: ['#롤업셔츠', '#시원함'] },
        shoes: { name: '로퍼 샌들 (or 가죽 슬라이더)', desc: '앞은 단정해 보이는 페니 로퍼 쉐입이나 뒤꿈치가 시원하게 노출된 뮬 로퍼입니다.', tags: ['#로퍼뮬', '#여름구두'] },
        point: { name: '슬림 메탈 프레임 하프 안경', desc: '안정적이고 시원해 보이는 인상을 남기는 얇은 실버/티타늄 스틸 프레임 안경입니다.', tags: ['#안경테', '#메탈안경'] }
      }
    },
    street: {
      default: {
        top: { name: '오버사이즈 피그먼트 프린팅 티셔츠', desc: '바디라인을 타고 흐르는 루즈 실루엣에 독창적인 스트릿 타포라피 아트를 수놓은 반팔입니다.', tags: ['#스트릿반팔', '#피그먼트티'] },
        bottom: { name: '와이드 카고 나일론 하프 팬츠', desc: '양옆에 큼지막한 입체 주머니가 스포티한 매력을 주며 가볍고 건조가 빠른 나일론 숏츠입니다.', tags: ['#나일론반바지', '#카고숏츠'] },
        outer: { name: '자켓 불필요', desc: '단풍 크롭 탑이나 루즈핏 레이어드 코디로 가벼움을 살리는 스트릿 고유 핏을 추천합니다.', tags: ['#단품코디', '#힙코디'] },
        shoes: { name: '스포티 리커버리 청키 플립플랍', desc: '말랑말랑한 미드솔로 충격을 분산하고 시각적으로 스포티한 쪼리형 신발입니다.', tags: ['#플립플랍', '#리커버리샌들'] },
        point: { name: '나일론 유틸리티 미니 힙색', desc: '벨트 라인이나 크로스로 바짝 매어 귀여움과 소품 휴대성을 모두 갖춘 미니멀 백입니다.', tags: ['#힙색', '#웨이스트백'] }
      }
    },
    minimal: {
      default: {
        top: { name: '실켓 오픈카라 반팔 셔츠', desc: '부드러운 실크 광택이 흐르며 카라 라인이 우아하게 깎인 럭셔리 실루엣 반팔 남방입니다.', tags: ['#오픈카라', '#실켓셔츠'] },
        bottom: { name: '원턱 테일러드 버뮤다 슬랙스', desc: '칼주름 핀턱이 곱게 뻗어 있으며 바지 밑단이 오버하게 흐르는 미니멀 하프 바지입니다.', tags: ['#버뮤다슬랙스', '#숏팬츠'] },
        outer: { name: '자켓 불필요', desc: '가벼운 티셔츠나 셔츠 단품으로 바지 안쪽에 넣어 입는 니트 인(Tuck-in) 코디를 추천합니다.', tags: ['#턱인스타일', '#미니멀'] },
        shoes: { name: '레더 슬립온 가죽 샌들', desc: '발가락과 등판을 굵은 소가죽 스트랩으로 덮어 클래식하고 정갈해 보이는 샌들입니다.', tags: ['#가죽샌들', '#여름구두'] },
        point: { name: '실버 스틸 스웨이지 팔찌', desc: '가벼워진 여름 옷차림에 은빛 고급스러움을 부여해주는 심플 뱅글 팔찌입니다.', tags: ['#실버팔찌', '#액세서리'] }
      }
    }
  },

  // Tier 7: Extremely Hot (>= 28°C)
  tier7: {
    casual: {
      default: {
        top: { name: '가벼운 린넨 반팔 티셔츠', desc: '바람이 숭숭 통하고 열 방출이 잘되는 네추럴 마 소재 혼방 캐주얼 티셔츠입니다.', tags: ['#린넨반팔', '#초시원'] },
        bottom: { name: '초경량 스트링 나일론 쇼츠', desc: '허리에 조절 끈이 있고 바지통이 넓어 활동 중 허벅지 쓸림 없이 시원한 아웃도어 쇼츠입니다.', tags: ['#나일론쇼츠', '#여름반바지'] },
        outer: { name: '자켓 불필요', desc: '뜨거운 직사광선 아래에선 긴팔 아우터는 사치! 탈수 예방을 위한 아주 가벼운 차림을 유지하세요.', tags: ['#폭염코디', '#노자켓'] },
        shoes: { name: '레트로 스포츠 샌들', desc: '벨크로 타입 스트랩으로 발을 단단히 고정해주어 계곡이나 해변 및 일상 어디든 좋은 샌들입니다.', tags: ['#스포츠샌들', '#여름샌들'] },
        point: { name: '초경량 나일론 사파리 볼캡', desc: '뜨거운 태양광으로부터 얼굴을 보호해주는 쿨 맥스 기능성의 가벼운 캡모자입니다.', tags: ['#볼캡', '#자외선차단'] }
      }
    },
    office: {
      default: {
        top: { name: '린넨 100% 미니멀 카라 반팔셔츠', desc: '순도 높은 린넨 원사를 사용해 까슬거리는 터치감으로 한여름 쾌적성을 극대화한 비즈니스 셔츠입니다.', tags: ['#린넨100', '#반팔셔츠'] },
        bottom: { name: '린넨 원턱 하프 트라우저 슬랙스', desc: '반바지 허용 오피스 트렌드에 맞춘 포멀 버뮤다 핏 린넨 바지로 한여름 시원함을 확보합니다.', tags: ['#린넨반바지', '#시원한오피스'] },
        outer: { name: '자켓 필요 없음 (실내 냉방대비 셔츠 소지)', desc: '자켓은 불필요하지만 실내 냉방 강풍에 대비하여 얇은 린넨 셔츠를 소지하는 것이 현명합니다.', tags: ['#실내냉방대비', '#가벼운휴대'] },
        shoes: { name: '쿨 컴포트 가죽 슬링백 뮬', desc: '앞코는 신사화 디자인이나 뒤가 트여 있어 발목과 발끝의 온도 상승을 즉각 막아줍니다.', tags: ['#로퍼뮬', '#오피스슈즈'] },
        point: { name: '시원한 메탈 실버 워치', desc: '가죽 스트랩보다 땀이 안 차고 메탈 고유의 광택으로 보기만 해도 쿨해 보이는 럭셔리 시계입니다.', tags: ['#메탈시계', '#여름포인트'] }
      }
    },
    street: {
      default: {
        top: { name: '오버핏 메쉬 나시 (or 슬리브리스 탑)', desc: '통풍 구멍이 미세하게 뚫려 있는 기능성 메쉬 나시로 스포티한 레이어드 룩을 만듭니다.', tags: ['#슬리브리스', '#메쉬나시'] },
        bottom: { name: '바스락 나일론 카고 버뮤다 쇼츠', desc: '허리부터 무릎까지 풍성하게 떨어지는 드라이한 질감의 스트릿 테크 숏츠입니다.', tags: ['#나일론쇼츠', '#스트릿숏츠'] },
        outer: { name: '자켓 없음', desc: '어깨가 시원하게 노출되는 나시 탑 단품에 볼드한 크루 목걸이를 조합하는 시원한 연출을 권장합니다.', tags: ['#나시코디', '#쿨스트릿'] },
        shoes: { name: '청키 스플릿 토 스니커 샌들', desc: '발가락이 갈라진 타비(Tabi) 디테일이나 스트랩 조절 구조로 통풍성이 높은 미래지향적 샌들입니다.', tags: ['#스니커샌들', '#타비슈즈'] },
        point: { name: '사이드 실드 아웃도어 틴트 선글라스', desc: '측면에 빛 가림 장치가 달린 미래적인 고글 실루엣 선글라스로 한여름의 눈부심을 막습니다.', tags: ['#선글라스', '#고글'] }
      }
    },
    minimal: {
      default: {
        top: { name: '프리미엄 60수 린넨 카라 반팔 셔츠', desc: '속 비침이 최소화되도록 밀도 높게 직조한 미니멀한 린넨 셔츠로 차갑고 단정합니다.', tags: ['#린넨카라', '#단색셔츠'] },
        bottom: { name: '테일러드 코튼 리넨 핀턱 반바지', desc: '슬랙스 같은 깔끔한 단면과 핀턱 봉제로 다리를 얇고 깔끔하게 연출해주는 쇼츠입니다.', tags: ['#리넨숏츠', '#미니멀반바지'] },
        outer: { name: '자켓 없음', desc: '셔츠 턱인 코디에 벨트 라인을 부각하여 시원하면서도 단정함의 밸런스를 살리는 데 집중하세요.', tags: ['#턱인', '#시원함'] },
        shoes: { name: '미니멀 소가죽 슬라이더 뮬', desc: '불필요한 고정 버클이 배제된 채, 질 좋은 단색 가죽 원장으로 발등을 감싸는 슬리퍼입니다.', tags: ['#레더슬라이드', '#가죽뮬'] },
        point: { name: '실버 플레이트 오픈 링 반지', desc: '두 손가락 사이에 겹쳐 낄 수 있는 고급스러운 실버 주얼리로 가벼운 손끝에 시선을 끕니다.', tags: ['#실버반지', '#액세서리'] }
      }
    }
  }
};

// Global App State
let appState = {
  temp: 18,
  weather: 'sunny',
  gender: 'unisex',
  style: 'casual'
};

// DOM Elements
const tempSlider = document.getElementById('temp-slider');
const tempBubble = document.getElementById('temp-bubble');
const sliderFill = document.getElementById('slider-fill');
const weatherBtns = document.querySelectorAll('.weather-btn');
const genderBtns = document.querySelectorAll('.gender-btn');
const styleSelect = document.getElementById('style-select');
const recCombinationDesc = document.getElementById('rec-combination-desc');

// Card elements
const cardElements = {
  top: {
    name: document.getElementById('top-item-name'),
    desc: document.getElementById('top-item-desc'),
    tags: document.getElementById('top-item-tags')
  },
  bottom: {
    name: document.getElementById('bottom-item-name'),
    desc: document.getElementById('bottom-item-desc'),
    tags: document.getElementById('bottom-item-tags')
  },
  outer: {
    name: document.getElementById('outer-item-name'),
    desc: document.getElementById('outer-item-desc'),
    tags: document.getElementById('outer-item-tags')
  },
  shoes: {
    name: document.getElementById('shoes-item-name'),
    desc: document.getElementById('shoes-item-desc'),
    tags: document.getElementById('shoes-item-tags')
  },
  point: {
    name: document.getElementById('point-item-name'),
    desc: document.getElementById('point-item-desc'),
    tags: document.getElementById('point-item-tags')
  }
};

// Init application
function init() {
  // Setup event listeners
  setupEvents();
  
  // Initial render
  updateUI();
}

// Bind events
function setupEvents() {
  // Slider events
  tempSlider.addEventListener('input', (e) => {
    appState.temp = parseInt(e.target.value);
    updateUI();
  });

  // Weather button events
  weatherBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      weatherBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.weather = btn.dataset.weather;
      updateUI();
    });
  });

  // Gender button events
  genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      genderBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.gender = btn.dataset.gender;
      updateUI();
    });
  });

  // Style select event
  styleSelect.addEventListener('change', (e) => {
    appState.style = e.target.value;
    updateUI();
  });
}

// Determine Temperature Tier
function getTempTier(temp) {
  if (temp < -5) return 'tier1';
  if (temp <= 4) return 'tier2';
  if (temp <= 11) return 'tier3';
  if (temp <= 16) return 'tier4';
  if (temp <= 22) return 'tier5';
  if (temp <= 27) return 'tier6';
  return 'tier7';
}

// Compute Color Gradients dynamically
function getInterpolatedGradient(temp) {
  // Mapping temp (-10 to 40) into smooth gradients
  // We'll interpolate between defined color anchors
  const anchors = [
    { temp: -10, start: [26, 40, 128], end: [38, 208, 206] },    // Deep Ice Blue
    { temp: 0,   start: [15, 76, 129], end: [108, 213, 237] },   // Classic Cyan/Blue
    { temp: 12,  start: [58, 123, 213], end: [0, 210, 255] },    // Mild Sky
    { temp: 20,  start: [255, 126, 95], end: [254, 180, 123] },  // Soft Coral/Orange
    { temp: 28,  start: [241, 39, 17], end: [245, 175, 25] },    // Warm Sunrise
    { temp: 40,  start: [230, 92, 0], end: [249, 212, 35] }      // Blazing Orange-Red
  ];
  
  // Find which anchors we lie between
  let lower = anchors[0];
  let upper = anchors[anchors.length - 1];
  
  for (let i = 0; i < anchors.length - 1; i++) {
    if (temp >= anchors[i].temp && temp <= anchors[i+1].temp) {
      lower = anchors[i];
      upper = anchors[i+1];
      break;
    }
  }
  
  // Calculate interpolation factor
  let range = upper.temp - lower.temp;
  let factor = range === 0 ? 0 : (temp - lower.temp) / range;
  
  // Interpolate RGB values
  const rStart = Math.round(lower.start[0] + (upper.start[0] - lower.start[0]) * factor);
  const gStart = Math.round(lower.start[1] + (upper.start[1] - lower.start[1]) * factor);
  const bStart = Math.round(lower.start[2] + (upper.start[2] - lower.start[2]) * factor);
  
  const rEnd = Math.round(lower.end[0] + (upper.end[0] - lower.end[0]) * factor);
  const gEnd = Math.round(lower.end[1] + (upper.end[1] - lower.end[1]) * factor);
  const bEnd = Math.round(lower.end[2] + (upper.end[2] - lower.end[2]) * factor);
  
  return {
    start: `rgb(${rStart}, ${gStart}, ${bStart})`,
    end: `rgb(${rEnd}, ${gEnd}, ${bEnd})`
  };
}

// Update the entire UI
function updateUI() {
  const { temp, weather, gender, style } = appState;
  
  // 1. Update Slider track fill & value bubble
  const sliderPercentage = ((temp - (-10)) / (40 - (-10))) * 100;
  sliderFill.style.width = `${sliderPercentage}%`;
  tempBubble.innerText = `${temp}°C`;
  
  // 2. Update Slider thumb glow dynamically to match the color theme
  const gradient = getInterpolatedGradient(temp);
  tempSlider.style.setProperty('--color-accent', gradient.start);
  sliderFill.style.background = `linear-gradient(90deg, ${gradient.start}, ${gradient.end})`;
  
  // 3. Update Hero Banner
  const heroBanner = document.getElementById('hero-banner');
  const heroTempVal = document.getElementById('hero-temp-val');
  const heroStatusTitle = document.getElementById('hero-status-title');
  const heroStatusDesc = document.getElementById('hero-status-desc');
  const heroWeatherIcon = document.getElementById('hero-weather-icon');
  
  heroTempVal.innerText = temp;
  heroBanner.style.background = `linear-gradient(135deg, ${gradient.start} 0%, ${gradient.end} 100%)`;
  
  // Weather icon names and statuses
  let weatherIconName = 'sun';
  let statusTitle = '';
  let statusDesc = '';
  
  // Temperature description mapping
  if (temp < -5) {
    statusTitle = '최강 한파 주의! 엄청 추워요';
    statusDesc = '살을 에는 듯한 강추위입니다. 무조건 보온이 가장 뛰어난 롱패딩과 귀도리, 장갑으로 완전 무장하세요!';
  } else if (temp <= 4) {
    statusTitle = '기온이 뚝, 따스히 챙겨 입으세요';
    statusDesc = '찬 바람이 부는 겨울 날씨입니다. 든든한 패딩이나 헤비 코트, 그리고 따뜻한 양말은 필수예요.';
  } else if (temp <= 11) {
    statusTitle = '쌀쌀한 바람이 감도는 계절';
    statusDesc = '바람이 꽤 차갑습니다. 기온차가 큰 봄가을 아침저녁을 대비해 코트나 따뜻한 자켓을 입어주세요.';
  } else if (temp <= 16) {
    statusTitle = '활동하기 편한 선선한 날씨';
    statusDesc = '봄바람/가을바람이 솔솔 부는 쾌적한 시기입니다. 셔츠 레이어드나 가벼운 블루종 자켓이 어울려요.';
  } else if (temp <= 22) {
    statusTitle = '포근하고 싱그러운 기온';
    statusDesc = '야외 활동을 하기에 가장 행복한 날씨네요! 맨투맨이나 가벼운 남방 단품으로 편하게 입어보세요.';
  } else if (temp <= 27) {
    statusTitle = '살짝 후덥지근한 공기';
    statusDesc = '초여름 기운이 들어와 해가 뜨겁습니다. 얇은 반팔 티셔츠와 반바지를 매치해 쾌적하게 꾸며보세요.';
  } else {
    statusTitle = '더위 조심! 폭염 대비 코디';
    statusDesc = '햇빛이 매우 강렬하고 덥습니다. 린넨 소재 의류나 가벼운 나시 티셔츠로 불쾌지수를 확 낮춰주세요.';
  }
  
  // Modify icon depending on weather selection
  switch (weather) {
    case 'sunny':
      weatherIconName = 'sun';
      break;
    case 'cloudy':
      weatherIconName = 'cloud';
      break;
    case 'rainy':
      weatherIconName = 'cloud-rain';
      break;
    case 'snowy':
      weatherIconName = 'snowflake';
      break;
  }
  
  heroWeatherIcon.innerHTML = `<i data-lucide="${weatherIconName}"></i>`;
  heroStatusTitle.innerText = statusTitle;
  heroStatusDesc.innerText = statusDesc;
  
  // 4. Update Weather Warning Banner
  const warningBanner = document.getElementById('weather-warning');
  const warningTitle = document.getElementById('warning-title');
  const warningDesc = document.getElementById('warning-desc');
  
  if (weather === 'rainy') {
    warningBanner.classList.remove('hidden');
    warningTitle.innerText = '우천 안전 알림';
    warningDesc.innerText = '오늘 비가 내려 노면이 젖고 습할 수 있으니 우산을 챙기시고 방수 스니커즈를 신는 것을 추천합니다.';
  } else if (weather === 'snowy') {
    warningBanner.classList.remove('hidden');
    warningTitle.innerText = '강설 및 결빙 주의';
    warningDesc.innerText = '눈으로 인해 노면이 빙판길로 변해 대단히 미끄럽습니다. 접지력이 강한 밑창의 신발을 착용하세요.';
  } else {
    warningBanner.classList.add('hidden');
  }
  
  // 5. Update Recommendation Text Line
  const styleTextMap = {
    casual: '캐주얼',
    office: '오피스',
    street: '스트릿',
    minimal: '미니멀'
  };
  const genderTextMap = {
    unisex: '남녀공용',
    male: '남성',
    female: '여성'
  };
  
  recCombinationDesc.innerText = `${genderTextMap[gender]} ${styleTextMap[style]} 스타일에 딱 어울리는 오늘의 추천 OOTD 조합입니다.`;

  // 6. Generate OOTD Cards contents
  const tier = getTempTier(temp);
  const styleData = ootdDatabase[tier][style];
  
  // Grab recommendation cards logic
  const getRecommendation = (category) => {
    // Determine priority: gender override -> default (unisex)
    if (styleData[gender] && styleData[gender][category]) {
      return styleData[gender][category];
    }
    // Fallback to default
    if (styleData.default && styleData.default[category]) {
      return styleData.default[category];
    }
    // Deep fallback to other options or a default message if not present
    return { name: '추천 아이템 없음', desc: '이 카테고리는 오늘 아우터가 어울리지 않는 기온입니다.', tags: ['#가볍게'] };
  };
  
  // For each category (top, bottom, outer, shoes, point), update the DOM
  const categories = ['top', 'bottom', 'outer', 'shoes', 'point'];
  
  categories.forEach(cat => {
    const data = getRecommendation(cat);
    const elements = cardElements[cat];
    
    // Smooth transition content change
    elements.name.style.opacity = '0';
    elements.desc.style.opacity = '0';
    elements.tags.style.opacity = '0';
    
    setTimeout(() => {
      elements.name.innerText = data.name;
      elements.desc.innerText = data.desc;
      
      // Render tags
      elements.tags.innerHTML = '';
      data.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.innerText = tag;
        elements.tags.appendChild(span);
      });
      
      elements.name.style.opacity = '1';
      elements.desc.style.opacity = '1';
      elements.tags.style.opacity = '1';
    }, 150);
  });
  
  // Force Lucide to render all dynamic icons
  setTimeout(() => {
    lucide.createIcons();
  }, 50);
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', init);