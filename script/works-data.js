const worksData = [
  {
    id: "zenn",
    date: "2026/2",
    title: "RDBMS応用概念 ビューとCTE",
    shortDesc: "ZennにRDBMSの応用概念であるビュー（VIEW）とCTE（WITH句）についての技術記事を投稿。",
    fullDesc: "RDBMSの高度な機能であるビュー（VIEW）と共通テーブル式（CTE）について解説した技術記事です。通常のビューとマテリアライズドビューの違い、通常CTEと再帰CTEの使い分けを、カフェチェーンの経営分析を例に実践的にまとめています。",
    thumbnail: "../images/works/zenn_viewcte01.png",
    media: [
      "../images/works/zenn_viewcte01.png",
      "../images/works/zenn_viewcte02.png"
    ],
    links: [
      { label: "記事を読む", url: "https://zenn.dev/ai10pro/articles/2026-02_view-cte" },
      { label: "GitHub（サンプルコード）", url: "https://github.com/ai10pro/view-cte_zenn-blog" }
    ],
    tags: ["Zenn", "SQL", "RDBMS", "PostgreSQL"]
  },
  {
    id: "hybrid-office",
    date: "2025/11",
    title: "VR×AR ハイブリッドオフィス接続システム",
    shortDesc: "PBL2でチーム開発。Webカメラで顔の向きを検知し、音声の左右バランスをリアルタイム変化させるハイブリッドオフィスシステム。",
    fullDesc: "PBL2（プロジェクト学習）にてチームで開発したデモンストレーション用プロトタイプです。リモートと現場の自然な共存を実現するというコンセプトで、Webカメラで顔の向きを検知しリアル側スピーカーの音声左右バランスをリアルタイムで変化させます。複数の拠点（モニターA・B等）への切り替えも可能。外部クラウドを使わずLAN内で完結する低遅延・高セキュリティな設計です。",
    thumbnail: "",
    media: [],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/hybrid-office" }
    ],
    tags: ["Next.js", "Node.js", "Socket.io", "WebRTC", "MediaPipe", "Three.js", "チーム開発"]
  },
  {
    id: "ctmr-viewer",
    date: "2025/11",
    title: "Advanced DICOM Viewer",
    shortDesc: "授業でPythonとPySide6を使って開発したCT・MRI等の医療用DICOM画像ビューワー。",
    fullDesc: "PySide6（Qt）をベースに開発した多機能な医用画像ビューワーです。DICOM形式（.dcm）ファイルを読み込み、Hounsfield Unit変換やWindow/Level調整によるコントラスト・輝度の動的変更、ズーム・パン操作に対応しています。軸状断（Axial）・冠状断（Coronal）・矢状断（Sagittal）の3断面を同時表示するMPR（多断面再構成）機能も実装しています。",
    thumbnail: "https://raw.githubusercontent.com/ai10pro/ctmr_viewer/main/images/03_loaded.png",
    media: [
      "https://raw.githubusercontent.com/ai10pro/ctmr_viewer/main/images/03_loaded.png",
      "https://raw.githubusercontent.com/ai10pro/ctmr_viewer/main/images/07_tadannHome.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/ctmr_viewer" }
    ],
    tags: ["Python", "PySide6", "DICOM", "医療画像", "MPR"]
  },
  {
    id: "kosen-signage",
    date: "2025/9",
    title: "高専祭デジタルサイネージシステム（本番）",
    shortDesc: "高専祭の来場者向けに展示・イベント情報をリアルタイム表示する本番用サイネージシステム。",
    fullDesc: "高専祭の来場者向けに展示やイベント情報をリアルタイムで表示する本番運用向けのデジタルサイネージシステムです。Next.js + Tailwind CSS でUIを構築し、Supabase + PostgreSQLでバックエンドを管理。Prisma ORMとShadcn UIを採用し、Raspberry Pi 4B/5での実機運用を想定した設計です。未完成ですが、Issue管理・プルリクエスト運用など本番を意識したチーム開発フローで進めました。",
    thumbnail: "../images/works/fes-signage_01.png",
    media: [
      "../images/works/fes-signage_01.png",
      "../images/works/fes-signage_02.png",
      "../images/works/fes-signage_03.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/kosen-festival-signage-system" },
      { label: "デプロイ（Vercel）", url: "https://kosen-festival-signage-system.vercel.app" }
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Prisma", "Raspberry Pi"]
  },
  {
    id: "a-star",
    date: "2025/7",
    title: "A*探索アルゴリズム可視化アプリ",
    shortDesc: "Google Gemini Canvasで構築。グリッド上のA*探索をリアルタイム可視化し、ステップごとの判断プロセスを学べるアプリ。",
    fullDesc: "Google Gemini Canvas機能を使って構築したA*（A-star）探索アルゴリズムの可視化アプリです。10×10グリッド上でスタートからゴールまでの最短経路探索をリアルタイムで表示します。1ステップずつ進める・戻すステップ実行制御、スタート・ゴール・障害物の手動配置、マンハッタン距離とユークリッド距離のヒューリスティック切り替え・比較モードを搭載。各ステップの評価ノードをコンソールログで確認できます。",
    thumbnail: "../images/works/a-star_01.png",
    media: [
      "../images/works/a-star_01.png",
      "../images/works/a-star_02.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/a-star_algo" }
    ],
    tags: ["AI", "アルゴリズム", "Gemini Canvas", "可視化"]
  },
  {
    id: "signage",
    date: "2025/3",
    title: "デジタルサイネージアプリのベース作成",
    shortDesc: "約半年NextJSを勉強し、2025年度高専祭向けデジタルサイネージのベースを作成。",
    fullDesc: "約半年改めてReact（NextJS）を勉強し、その成果として2025年度の高専祭で作成予定のデジタルサイネージのベースを作成した。サイネージに表示されるコンテンツはSupabaseを使用しデータベースとして保存している。",
    thumbnail: "../images/works/signage1.png",
    media: [
      "../images/works/signage1.png",
      "../images/works/signage2.gif"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/digital-signage-app" }
    ],
    tags: ["Next.js", "React", "Supabase"]
  },
  {
    id: "linux-server",
    date: "2025/2",
    title: "Linuxサーバ構築手順書",
    shortDesc: "Linux・UbuntuによるWebサーバー構築をPDF形式でまとめた実践的な手順書。",
    fullDesc: "Linux（Ubuntu）を使ったWebサーバー構築の手順をまとめた実践的なチュートリアルドキュメントです。LaTeXで作成しPDF形式で提供しており、セットアップから実際の設定までを段階的に確認しながら進められる構成になっています。",
    thumbnail: "../images/works/linux_01.png",
    media: [
      "../images/works/linux_01.png",
      "../images/works/linux_02.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/linux-sever" }
    ],
    tags: ["Linux", "Ubuntu", "サーバー構築", "LaTeX", "ドキュメント"]
  },
  {
    id: "bousai",
    date: "2025/1",
    title: "統合型防災アプリ",
    shortDesc: "SDGsへの取り組みとして約4か月かけてチーム開発した防災アプリ。",
    fullDesc: "約4か月をかけてSDGsへの取り組みとして統合型防災アプリをチーム開発しました。このアプリはサービスとして考案し試作した段階です。",
    thumbnail: "../images/works/bousai-app-1.png",
    media: [
      "../images/works/bousai-app-1.png",
      "../images/works/bousai-app-2.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/manmaru-ai/pbl1-team4" }
    ],
    tags: ["チーム開発", "SDGs"]
  },
  {
    id: "unity1week24",
    date: "2024/12",
    title: "Unity 1Week GameJam",
    shortDesc: "Unityの勉強を兼ねてUnity 1Week GameJamに参加。お題は「なし」。",
    fullDesc: "Unityの勉強もかねてUnity 1Week GameJamに参加しました。お題は「なし」。半分以上友達の助けを借りながら何とか時間内に完成しました。",
    thumbnail: "../images/works/unity1week-2412-1.png",
    media: [
      "../images/works/unity1week-2412-1.png"
    ],
    links: [
      { label: "ゲームページ", url: "https://unityroom.com/games/non-money-saihubakuhatu" }
    ],
    tags: ["Unity", "C#", "ゲーム"]
  },
  {
    id: "img-effector",
    date: "2024/2",
    title: "画像エフェクトアプリ",
    shortDesc: "PySide6とOpenCVを使ったドット絵風処理ができる画像エフェクトアプリ。制作時間約18時間。",
    fullDesc: "製作時間:約18時間。PySide6を利用して画像エフェクトアプリを作りました。このアプリは任意の画像を入力し、ドット絵風処理をすることができます。ドット絵処理にはK-means法を用いて減算処理を行っており、画像領域内の色の比率によって指定する色の数に減算処理をすることができます。また、Alpha値の指定ができ、ドット絵処理のドット数を指定することができます。",
    thumbnail: "../images/works/img_effector_01.png",
    media: [
      "../images/works/img_effector_01.png",
      "../images/works/img_effector_02.png",
      "../images/works/img_effector_03.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/img_effector" }
    ],
    tags: ["Python", "PySide6", "OpenCV"]
  },
  {
    id: "square-tag",
    date: "2024/1",
    title: "9マス鬼ごっこ",
    shortDesc: "1年間のPython学習の集大成として作成した9マス鬼ごっこゲーム。",
    fullDesc: "1年間のPythonの集大成として9マス鬼ごっこというゲームを作成しました。9マスの中にプレイヤーと鬼が配置され、それぞれ同時に別のマスまたは今いるマスにとどまり、プレイヤーと鬼が同じマスになったときにゲームオーバーとなるゲームです。キーボードで操作し、移動できた回数によりスコアが加算されていきます。",
    thumbnail: "../images/works/Square-tag-game1.png",
    media: [
      "../images/works/Square-tag-game1.png",
      "../images/works/Square-tag-game2.png",
      "../videos/works/Square-tag-game3.mp4"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/Square-tag-game" }
    ],
    tags: ["Python", "ゲーム"]
  },
  {
    id: "kosenfes-2023",
    date: "2023/10",
    title: "2023年度高専祭特設サイト",
    shortDesc: "GatsbyJSとTailwindCSSで作成した高専祭特設サイト。Netlifyでデプロイ。",
    fullDesc: "昨年に引き続き、高専祭特設サイトをデザイン・コーディングを行いました。React、GatsbyJSベースで作成し、Netlifyでデプロイしました。また、TailwindCSSを使用しました。",
    thumbnail: "../images/works/59-kosenfes.png",
    media: [
      "../images/works/59-kosenfes.png"
    ],
    links: [
      { label: "サイトURL", url: "https://omuct-kosen-fes.netlify.app/" }
    ],
    tags: ["React", "Gatsby", "TailwindCSS", "Netlify"]
  },
  {
    id: "genshin-gacha",
    date: "2023/9",
    title: "原神ガチャシュミレーション",
    shortDesc: "プログラミング1の自由課題としてGoogleColab上で作成した原神ガチャシミュレーター。",
    fullDesc: "プログラミング1の自由課題として、原神というゲームのガチャシュミレーションをGoogleColab上で作成しました。",
    thumbnail: "../images/works/genshin-gacha.png",
    media: [
      "../images/works/genshin-gacha.png"
    ],
    links: [
      { label: "GitHub", url: "https://github.com/ai10pro/Genshin_Gacha_simulator" }
    ],
    tags: ["Python", "Google Colab"]
  },
  {
    id: "yotei-tyousetu",
    date: "2023/6",
    title: "予定調節くん",
    shortDesc: "GitHub認証付きの予定調節アプリ。バックエンドの練習としてDockerを使って開発。",
    fullDesc: "バックエンドの練習を兼ねて予定調節くんという、予定調節アプリを作成しました。GitHub認証を導入しており、予定の作成者、参加者などが管理できるようになっています。Dockerを使ってAPIの開発を行いました。",
    thumbnail: "../images/works/yotei-tyousetu.png",
    media: [
      "../images/works/yotei-tyousetu.png"
    ],
    links: [],
    tags: ["Docker", "バックエンド"]
  },
  {
    id: "kosenfes-2022",
    date: "2022/10",
    title: "高専祭特設サイト",
    shortDesc: "Reactを使って作成した高専祭特設サイト。現在はサイト閉鎖。",
    fullDesc: "高専祭特設サイトのデザインとコーディングを行いました。Webフレームワーク（React）を利用して作成しました。現在はサイト閉鎖のため見ることはできません。",
    thumbnail: "../images/works/58-kosen-fes.png",
    media: [
      "../images/works/58-kosen-fes.png"
    ],
    links: [],
    tags: ["React"]
  },
  {
    id: "my-homepage",
    date: "2022/5",
    title: "ゲーム紹介ページ",
    shortDesc: "TRの卒業制作としてHTML・CSS・JSで作成した動きのあるゲーム紹介ページ。",
    fullDesc: "TRの卒業制作物としてHTMLとCSS、JavaScriptを使って動きのあるゲーム紹介ページを作りました。",
    thumbnail: "../images/works/my-homepage.png",
    media: [
      "../images/works/my-homepage.png"
    ],
    links: [
      { label: "サイトURL", url: "https://ai10pro.github.io/my-homepage/html/game-index.html" },
      { label: "GitHub", url: "https://github.com/ai10pro/my-homepage" }
    ],
    tags: ["HTML", "CSS", "JavaScript"]
  }
];
