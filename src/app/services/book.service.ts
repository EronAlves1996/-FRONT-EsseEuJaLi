import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[] {
    return books;
  }
}

const books: Book[] = [
  {
    img: 'http://books.google.com/books/content?id=m_orAAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    title: "Before I Forget",
    id: 'm_orAAAAIAAJ',
    description: 'If one of our fellows \u003cb\u003eforgets\u003c/b\u003e himself and uses an unmentionable word, will your wife be upset?” To this he replied: “Will they be upset if she does?” But it is not all tough. We have not yet developed the Baden-Powell epic to the point&nbsp;...',
    pages: 190,
    year: 1961,
    points: 2
  },
  {
    img: 'http://books.google.com/books/content?id=zUGoDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    title: "Mission: Impossible to Forget",
    id: 'zUGoDwAAQBAJ',
    description: 'Former Special-Ops Marine Nick Jenkins is out of a job and out of patience. Discharged from the Corp because of hearing loss, the last thing he wants to do is babysit someone who’s surrounded by the haunting sounds of music he can no longer appreciate. Professional cellist Emily Hewitt loves nothing more than creating music. Sharing her gift with the world is all she lives for. Until her life is threatened. Caught up in a treacherous conspiracy, Emily becomes the pawn in an international play for power and must be assigned a bodyguard. When danger turns deadly, will Nick be able to save Emily? Mission: Impossible to Forget is a standalone romance in USA Today bestselling author Jacki Delecki’s heart-racing, pulse-pounding Impossible Mission military romantic suspense series featuring Special Forces operatives and the strong women who love them. Don’t miss a single exhilarating adventure into danger and passion. Mission: Impossible to Resist Mission: Impossible to Surrender Mission: Impossible to Love Mission: Impossible to Forget Mission: Impossible to Wed Mission: Impossible to Protect Each steamy, action-packed standalone romance in the Impossible Mission series delivers a hellaciously stubborn, hot as blazes, alpha male military hero brought to his knees by a fierce, strong, independent woman. Only together can they complete their impossible mission. “This story has it all going on suspense, kidnappings, murders, loving ex-military brothers, a cello, a feisty heroine, romance and a dog.” —Angela, Goodreads “Five stars! Secrets, lies and danger around every corner. Loved this book.” —Sue, Goodreads “This book has it all suspense, danger, romance, and lots and lots of strong hunky guys...” —Nanna, Goodreads',
    pages: 200,
    year: 2020,
    points: 3
  },
  {
    img: 'http://books.google.com/books/content?id=70jdzk9rYkQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    title: "Remembering to Forget",
    id: '70jdzk9rYkQC',
    description: 'AcknowledgmentsI: Collective Memories, Images, and the Atrocity of War II: Before the Liberation: Journalism, Photography, and the Early Coverage of Atrocity III: Covering Atrocity in Word IV: Covering Atrocity in Image V: Forgetting to Remember: Photography as Ground of Early Atrocity MemoriesVI: Remembering to Remember: Photography as Figure of Contemporary Atrocity Memories VII: Remembering to Forget: Contemporary Scrapbooks of Atrocity Notes Selected Bibliography Index Copyright © Libri GmbH. All rights reserved.',
    pages: 292,
    year: 2000,
    points: 3
  },
  {
    img: 'http://books.google.com/books/content?id=wAblMinB3UMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    title: "Markets Never Forget (But People Do)",
    id: 'wAblMinB3UMC',
    description: "Sir John Templeton, legendary investor, was famous for saying, \"The four most dangerous words in investing are, 'This time it's different.'\" He knew that though history doesn't repeat, not exactly, history is an excellent guide for investors. In Markets Never Forget But People Do: How Your Memory Is Costing You Money and Why This Time Isn't Different, long-time Forbes columnist, CEO of Fisher Investments, and 4-time New York Times bestselling author Ken Fisher shows how and why investors' memories fail them—and how costly that can be. More important, he shows steps investors can take to begin reducing errors they repeatedly make. The past is never indicative of the future, but history can be one powerful guide in shaping forward looking expectations. Readers can learn how to see the world more clearly—and learn to make fewer errors—by understanding just a bit of investing past.",
    pages: 245,
    year: 2011,
    points: 3
  },
  {
    id: 'qanoAQAAQBAJ',
    title: "Forget About It",
    year: 2007,
    description: "From internationally bestselling and award-winning author Caprice Crane, a heartwarming and hilarious novel about letting go of your past to find your future. Jordan Landau is having a bad life. At twenty-five, she is attractive, smart, funny and talented. But all that doesn't keep her mother from calling her fat, her boss from stealing her ideas, and her boyfriend from cheating on her. Day in and day out, she sits back and watches as everyone walks all over her. Then one day while riding her bike home from a particularly awful day, Jordan collides with a car door and is knocked clear off her bicycle. Coming to in the hospital, Jordan realizes she has a perfect excuse for a \"do-over\"; she vows to fake amnesia and reinvent herself. And it works. Finally, Jordan is able to get the credit she deserves at work, and she stands up to her family and her jerk boyfriend. She's living the life she always dreamed of--until the unthinkable happens. Suddenly Jordan must start over for real, and figure out what really makes her happy--and how to live a truly memorable life.",
    pages: 368,
    img: 'http://books.google.com/books/content?id=qanoAQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
    points: 4
  },
  {
    id: '5ekkDwAAQBAJ',
    title: "Forget Me Not",
    year: 2017,
    description: "Author Debbie Flacks Mum had always been a hard-working woman and loving grandmother, but in her later years, bizarre questions and strange behavior started ringing alarm bells. Like the edges of a cloth starting to fray, Mums personality and understanding of situations started to change. Unknowingly, lives were about to change when Mum was diagnosed with dementia, a collection of symptoms caused by disorders affecting the brain. In Forget Me Not, Flack narrates the familys journey with her mothers diagnosis, from discovering the symptoms, realizing the changes that occur, and exploring the treatment options. It offers an honest account of the lows and highs of the disease, and it shares that no matter what type of dementia a person has, the journey for the sufferer and their loved ones can truly be a difficult one. Discovering how strong love can be, Flack describes the emotional toll of this cruel disease. Forget Me Not shares one familys experiences and promotes an awareness of dementia and encourages the importance of research for this disease.",
    pages: 104,
    img: "http://books.google.com/books/content?id=5ekkDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    points: 2
  },
  {
    id: 'm-QGEAAAQBAJ',
    title: "Make Me Forget",
    year: 2014,
    description: "One lie can destroy everything… After enduring years of manipulation and an immeasurable amount of loss, Charlotte Kelly makes one last ditch effort to change her life and try to find happiness again. She knows she’ll see him when she moves back to Wisconsin. She’s planning on it, the connection she still feels to him after all these years is undeniable. But one lie tore them apart years ago, and she’s afraid some mistakes can’t be forgiven. Travis Parker doesn’t like liars. When he was younger, lies burned him in a bad way. It only took one summer with Charlotte’s innocence to know that she was it for him. When he thought he finally had something to look forward to, one misguided lie shattered everything he believed. Now, Char’s back, but she’s not the same girl he once knew. Readers love this sweet and sexy second chance romance! “So SO good! I was hooked from the very beginning. I couldn't put it down. Anna Brooks does such an amazing job making you FEEL the emotions through her characters. You will fall in love with them all. This is a MUST read! Highly recommend!” ~Tiffany K “This is one of those books that will have you reading all night instead of sleeping! It brought me to tears quite a few times and I didn’t really want it to end.” ~Kelly T “What a wonderful, emotionally satisfying story! I cried tears of sorrow, tears of joy, tears of frustration...yeah, I'm a crybaby! I felt like I knew these characters now I don't want to say goodbye to them! Loved this book!!” ~Elle *** Make Me Forget is the first book in a series of second chance romances featuring the most loyal men as they battle their past in order to secure a future with their one true love. Defeat is not an option when their hearts are on the line. Each emotional and angsty story can be read as a standalone. *** keywords: romantic suspense, alpha male romance, hot romance, contemporary romance, modern romance, sexy, angsty, contemporary romance series, romantic suspense series, family, love, friends to lovers, swoon, HEA, no cliffhanger, steamy romance, family saga, loyalty, second chance, emotional journey, love books, firefighter romance, virgin, secrets, fireman, fireman romance",
    pages: 291,
    img: "http://books.google.com/books/content?id=m-QGEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    points: 3
  },
  {
    id: 'hz_YCwAAQBAJ',
    title: "Forget Me Not",
    year: 2010,
    description: "School secretary, Miranda Wilkins is thrilled when Paul Green walks into her life. The handsome gym coach is everything she wants in a man'except for one problem. He's stopped trusting in a loving God. As she attempts to persuade Paul to trust, her own faith is tested. Her mother is gradually becoming mentally and physically incapacitated by a mysterious illness, and her father and sister are suffering from a strain that threatens to tear the family apart. Will Miranda have the strength to be a witness to Paul, or will her tribulations and his anger at God cause him to drift from her?",
    pages: 246,
    img: "http://books.google.com/books/content?id=hz_YCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    points: 3
  },
  {
    id: 'fVw1AQAAQBAJ',
    title: "Forget Me Not",
    year: 2008,
    description: "The first book in Marliss Melton's SEAL Team Twelve military romantic suspense series offers a riveting look at the hardships faced by both prisoners of war and the families they leave behind--and what happens when they finally come home. Helen Renault has started her life over thinking that her Navy SEAL husband Gabe was dead, but when Gabe returns he seems different and more caring, until the memory of the past three years starts to come back to him. A Hero's Nightmare. Gabe Renault doesn't know why he was in a prison camp. He has no memory of the past three years or of the Navy Seal mission that went wrong. Only two things kept him going: thoughts of his wife and the certainty that he must escape. A Sudden Homecoming. After Gabe is presumed dead, Helen pulls the tattered pieces of her and her daughter's lives back together. Married young and for all the wrong reasons, she's standing on her own two feet at last-and proud of it. Then comes the biggest shock of all--Gabe returns home. Gone is the distant, secretive husband he once was. This new Gabe is a man she could easily, finally, lose her heart to. But his memory is slowly returning, exposing a trail of government treachery...and jeopardizing his and Helen's second chance at love.",
    pages: 384,
    img: "http://books.google.com/books/content?id=fVw1AQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    points: 4
  }
]
