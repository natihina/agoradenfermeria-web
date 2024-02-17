interface Institution {
  id: number;
  title: string;
  name_short: string;
  name_long: string;
  link_id: number;
  logo_id: number;

  link: Link | undefined;
  logo: Image | undefined;
}
