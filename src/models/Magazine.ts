interface Magazine {
  id: number;
  number: number;
  vol_major: number;
  vol_minor: number;
  creation_date: Date;
  modified_date: Date;
  type: number;
  status: number;

  cover: Image | undefined;
  details: MagazineDetails | undefined;

  magazine_entrypoint: string;
  magazine_format: MagazineFormat;

  articles_count: number;
}

enum MagazineFormat {
  pdf = 'pdf',
  html = 'html',
}

interface MagazineCover {
  magazine_id: number;
  lang: Lang,
  type: number;
  image_id: number;
  status: number;

  //image: Image;
}

interface MagazineDetails {
  magazine_id: number;
  lang: Lang;
  label: string;
  publish_date: Date;
}

interface MagazineFile {
  id: number;
  magazine_id: number;
  lang: Lang;
  type: number;
  file_path: string;
  status: number;
}

enum Lang {
  es = 'es',
  ca = 'ca',
}

interface Image {
  id: number;
  type: number;
  width: number;
  height: number;
  size: number;
  file_name: string;
  file_path: string;
}
