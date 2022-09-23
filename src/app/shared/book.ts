export class Search {
    totalItems: number = 0;
    items: Book[] = [];
}

export class VolumeInfo {
    title: string = '';
    industryIdentifiers: ISBN[] = [];
    authors: string[] = [];
    subtitle: string = '';
    publishDate: string = '';
    categories: Array<string> = [];
    pageCount: number = 0;
    description: string = '';
    imageLinks: { thumbnail: string } = { thumbnail: '' };
}

export class ISBN {
    identifier: string = '';
}

export class Book {
    id: string = '';
    volumeInfo: VolumeInfo = new VolumeInfo();
}
