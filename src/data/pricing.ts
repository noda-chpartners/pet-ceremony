export type PriceRow = {
  /** 分類名（代表的な種類） */
  label: string;
  /** 体重などの目安 */
  guide: string;
  /** 合同火葬（ご返骨なし）。null は対応不可 */
  joint: number | null;
  /** 個別火葬（ご返骨あり） */
  private: number;
  /** 立会火葬（ご返骨あり） */
  attended: number;
  /** ファミリアプラン（ご返骨あり） */
  familia: number;
  note?: string;
};

/** 公式料金表（税込）。骨壺・骨袋込み、追加請求なし。 */
export const priceTable: PriceRow[] = [
  {
    label: '小鳥・ハムスター・ハリネズミ・リスなどの小動物',
    guide: '目安 体長15cm・500g未満',
    joint: 6600,
    private: 13200,
    attended: 16500,
    familia: 19800,
  },
  {
    label: 'チンチラ・モルモット・幼猫・フクロウ・亀など',
    guide: '目安 1kg未満',
    joint: 9900,
    private: 16500,
    attended: 19800,
    familia: 23100,
  },
  {
    label: 'うさぎ・猫・チワワ・トイプードル・ポメラニアンなど',
    guide: '目安 5kg未満',
    joint: 13200,
    private: 19800,
    attended: 24200,
    familia: 29700,
  },
  {
    label: '大きい猫・ミニチュアダックス・パグ・キャバリアなど',
    guide: '目安 8kg未満',
    joint: 15400,
    private: 22000,
    attended: 26400,
    familia: 31900,
  },
  {
    label: '柴犬・コーギー・フレンチブルドッグ・ビーグルなど',
    guide: '目安 13kg未満',
    joint: 19800,
    private: 27500,
    attended: 31900,
    familia: 37400,
  },
  {
    label: '紀州犬・甲斐犬・ボーダーコリーなど',
    guide: '目安 18kg未満',
    joint: 26400,
    private: 33000,
    attended: 37400,
    familia: 42900,
  },
  {
    label: 'コリー・ダルメシアン・サルーキーなど',
    guide: '目安 23kg未満',
    joint: null,
    private: 38500,
    attended: 42900,
    familia: 48400,
  },
  {
    label: 'ハスキー・ボクサー・秋田犬・ブルドッグなど',
    guide: '目安 26kg未満',
    joint: null,
    private: 40700,
    attended: 45100,
    familia: 50600,
  },
  {
    label: 'ゴールデンレトリバー・ラブラドール・シェパードなど',
    guide: '目安 30kg未満',
    joint: null,
    private: 44000,
    attended: 49500,
    familia: 55000,
  },
  {
    label: 'バーニーズマウンテンドッグ・アイリッシュセッターなど',
    guide: '目安 35kg未満',
    joint: null,
    private: 49500,
    attended: 55000,
    familia: 60500,
  },
  {
    label: 'ロットワイラー・グレートピレニーズなど',
    guide: '目安 40kg未満',
    joint: null,
    private: 55000,
    attended: 61600,
    familia: 67100,
    note: '現在、お預かり個別火葬のみのご対応となります。',
  },
];

export const planColumns = [
  { key: 'joint', name: '合同火葬', sub: 'ご返骨なし' },
  { key: 'private', name: '個別火葬', sub: 'ご返骨あり' },
  { key: 'attended', name: '立会火葬', sub: 'ご返骨あり' },
  { key: 'familia', name: 'ファミリアプラン', sub: 'ご返骨あり' },
] as const;

export const yen = (value: number) => `${value.toLocaleString('ja-JP')}円`;
