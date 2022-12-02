export interface Project {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  backgroundimage: { alttext: string; asset: Asset };
  date: string;
  description: string;
  slug: { _type: string; current: string };
  tags: string[];
  title: string;
}

export interface Asset {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
  assetId: string;
  extension: string;
  metadata: object;
  mimeType: string;
  originalFilename: string;
  path: string;
  sha1hash: string;
  size: number;
  source: { id: string; name: string };
  uploadId: string;
  url: string;
}
