export class Search {
    totalItems: number = 0;
    items: Book[] = [];
}

export class VolumeInfo {
    title: string = '';
    subtitle: string = '';
    publishDate: string = '';
    categories: Array<string> = [];
    imageLinks: {thumbnail:string} = {thumbnail: ''};
}

export class Book {
    id: string = '';
    volumeInfo: VolumeInfo = new VolumeInfo();
}
