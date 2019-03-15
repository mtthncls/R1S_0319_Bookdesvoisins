//Array peoples

const resid = [
    {
      name : "Faucheux Virgine",
      presentation :"Pour la société Le Bloc j'occupe les fonctions d'Office Manager, en d'autres termes l’administratif et la comptabilité. Sur le projet Quartier Libre, j'ai en charge l'animation de la vie communautaire et la gestion des bâtiments, donc le bien-être des Résidents",
      picture:"https://quartierlibre.co/sites/default/files/styles/large/public/upload/Le%20Bloc_Virginie%20FAUCHEUX.jpg?itok=2_PVa9vb",
      link : "p"
    },
    {
      name : "Gignon Jérémy",
      presentation :"Développeur backend / Mainteneur de l'infrastructure. Amateur de sports mécaniques et de technologie en général.",
      picture:"https://landing.adback.co/wp-content/uploads/2017/09/jeremy_gignon_1.jpg",
      link : "p"
    },
    {
      name : "Costa Nathalie",
      presentation :"Pragmatique et ouverte d’esprit, elle aime découvrir, s’enrichir et rencontrer de nouvelles personnes.",
      picture:"https://quartierlibre.co/sites/default/files/styles/large/public/upload/NC%20COMMUNICATIONS_Nathalie%20COSTA.jpeg?itok=KbEpg3YW",
      link : "p"
    },
    {
      name : "Mairesse Amélie",
      presentation :"Stagiaire en marketing et communication, geek",
      picture:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDRAQEBAJEBANDRYNDQkJDQ8ICQ4KIB0iIiAdHx8kKDQsJCYxJx8fLTItMTNAQ0MwIys/TTNANzQ5LisBCgoKDg0OGxAQFy0lHyYuLS0rLS0tKy0tKy0tKysrLS0tLSstLSsrKy0rLS0tKy0rLi04LTgrLS0rLS0xKystLf/AABEIAMgAyAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAABAwIEBAMEBwYFBQEAAAABAAIDBBEFEiExBkFRYRMicTJSgZEHFCNCYqHBFUNyseHwJDNTktFzgqKy8TT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMBBAX/xAAoEQACAgICAQQCAQUAAAAAAAAAAQIRAyESMUEEIiMyUWFxEzNCQ5H/2gAMAwEAAhEDEQA/AOoIIkEowEESCAAhdEggAIIJLnW69NNUGBkoIklzlhopC6ae/qf+FFkqXcgB3fdK5JGqLZOujVW2sI9otv38ilwVTXc7H3XWuhSTBxaJCF0V0FpgaCJBABoIkFgBoIgjQAEEEFgAQQQQA6iQQKoYBEgggAIihdFdABoroJLnWF0AJleAqfEMbYy+u3wKKsr2tL7nW17e61czxPFnzVOVoJu6zQ0EuUnJt0i8cetm1qOJemg521KrZuIw4gEuFtzzupeD8JvcwOkD7keUcrKZVcF3BIBH4dwpsusaRUQ4zFrd7gOrzZv9VYRVwsPDka63Iaqir+CXu/1LA+y0+VVDMPmp32zP30zE3DUvFPpm012joVHxJlcGTDQ6NlZqVoYZ2vaHNLXA/eabhc0gnErCCBmbuw6XKOhxSWklBBJjcbEO9k9j3WxyNaYs8Ce4nTroXUHC8SjqI87Dr95h9prlNV07ONpp0w0ESNaAEaJBYAaCCJABoIkEAOoIIk5gaJEiugAyiQRFAAUeulDYySdALp8lZbjfEckYjafM7f8AhSydIeEeUqMZjmKudK4An7Q5crfaI6BbvgbhBrGtqJ2jO7zBhHshZ3gHAfrVX9YkF2Q6Mvq0vXYGAAWGwU4Rs6M0+OkBrANgAic0JRKjyP1VJUjmim2MzU7Tc2VDimBxyA3Av153Wgc/RRZX6KMkdmPkcqxnD3078wGg57aKHI8SNN97eZo0BW/x+na+Miw/quaVJMMhHu8ueVTZ0LolYTiclLLmaSR/4ub3XTMKxJlREHsPZzN3NcuTSOB8w2O/Yq24dxV1PMD9wmz28sqIT4shlxclrs6gjTcUgc0OBuCLgjayWumzhDQRI0AGgiQQAaCJBADqJEgqGAQREokAHdEiuiJWGBPdYE9Fy7iSrM07ze4LsremVbjiiv8ACpnWNi/yDrZc5pD4uIUsA+/KHuG5yqM3bo6/TqlyZ2ThLDRT0cTALEtDndcxVy1IgFmgcgLIpKqNu7mj1KZIjO5SY4/ZRZHf3zUefFotg9p9CmvrAcFkmi2LE1tkgu5JmQJtso6qHUV7RubBIzoUaEV8V2lc74qw4+0Nwt5Pi8NtXtVBiUsUrTlc03066pGVX4OcwVFrg7HQj3XKbTy2dY27HsomOQGGQut5TuExBMCBlN7eye3REo2rRPlTo6lwXieZphcdWas/hWqC5Rw3iGSaNw3ByuG2i6ox1wCOYv8ABPilao488ala8jiCK6CqRDQQQQAaCJBAC0ESCoYBEhdESgAEpBKMpmZ9gT0CxgjA/SDieV1hlPgtvlffLnKxOHVtU+vYKZh+svt4RjiayYOI315forjiitbnle9oe10mQsN9YxunfoeDf2o9+py07vCzautcD+SnCXtbOrJFpxijYUmA445t5sWEZ5xxsE4B/JFV4HiA3xWnf+GopwwfkVb8TYv4bcoLmlx1IBe4N62WHxPiOVsYfHAwRl5YZKlv1ipcepvskjKUnSKuEYK2TJTXwgkso6ix3pHljsvoVZYBxXC93hSuMMnOOo8jQel1k8OxmSTM7KG5dc8d2tI9EOL6cmniqWgBz3+FmZu9pCat0xlk9vJHQ6rHqNo//XR3/wCq1ZTG+Jqe4DZBIdgyD7UlVWIfR7KyiE5MrXeFn8MtBbmt81B4YpS2B1SWjNs05b5WDTRLUXsOWS61/PZYR1FQ/VlFJlOzqmQU2nxT0Zrg0kUtJf3WVDXG3zVbX47NEGuDAc9/tpWl7vlyTTOIZXR55GR2Dg3PCPDmWuGtIX+quVNsZx2WbL9tSzt3zGNzZGj4rP05yTBrHA3I00c3ZbSKtEzCL377FZfF8OySeJaMgAmSK+Rw72WY5Lpi5ovUk7J2H1YztcDo4275l2XB5w+CNwNxlsuBYfKM5a06ZRY7eZdh4Bq89KWndjvyQo8Zk8j5Qs1YKNIujBVDnFoJIKO6ADQQRIAcRIIiVQUBSSUZKSSsAIlV+LTZYXno0lTnFUHFM1oSAbX0+CTI6iVwxuaRyriZ/lt2ufVWn0exGlmpat5tBPM+ilfs1jyAQT8f5Kn4gNyelwPgulfRph8FXgssErczHTkOsbOa6wsQeRCROsZ05V8lm4kom3LmhgcRbxMoc6yoq6hlubMgeL7loP6JkuxChDYw0V8DBZj3O+r1zW9DyKSeLnDR1DijTzAYx7fndIo1sqk/wNQYJI918rG291oa1Cpwkz4hR02XPDSk1VVKbOj8X7rfVG7iOrlBbDTOpwRb61Wua5zD1DR+pWh4UwxtLCMznPkmPiz1MmskkpW9ugnyUbr+CVxFrGW8i2xHZc1wbDWRukpw8ktkL2sJyyNabHTtquiYvVjXUaLn2PUD3SNqYHCOeE+SQ6xvj913ZLL7djY4tQWie7BZRq0h4914BKYdgkrv3cLe5AH6Jyj4zbGAKuCpgcP3jGGopXdwQpruNsPP7+L/AGvzfyWNNm2vJWfsMMOoZcc2iy5/xsGmd+TNeFojkP3cx1st9XcSma7aOGeVx0FRMw01Gw9STqVmeIsJEOHyAnPISZZpyLF8x3KIPjLYmVck6MVhI83xXVfo7l9tt99bdly3DhZwXQ/o/l/xRb+AlVyfdHKl8Z0oFKBTQKUCmIDgKVdNgpQK0BSCK6CwBxEULoiVUUBKQ4oyUglABFyx/GU/LkB6arWuKwXFst3H5qObo6fSr32YfHhoD1XSvoUnBoahvNtSL/Fo/wCFzfHW+Udjt2W2+hZzhHWg3H2kb7H2tiEn+svP+6dU8QDUqBiGJta06Nv8FDxCtyhZPFcTvoCbnYDUrOTSOiGNN2yxfXulkAaLgbgezdFjXE0zamONsJMY0kfmLHtb26pXDdKTa41cb91osYwpr2Xsy4HtGwK1J0a5x5VRisSxSTzWuTybfKCVWUWKTOYWyxhrzpaNxe3KrCswd7XE3FhzJ0sl08A6sJ6ggqci1rwN4fWuiIbIAWu2DhmbdXsbYHC4jiB7NAKpq2AZbKHRV5a7I4+juoWWLdmjliaNgAsvxmP8FN/B+qvmz3CoeNT/AICb0A/MJF9kSyP2s5zQjzBa/gyoyYizXR12drlZGh3HqArKjlcyXxW/ce11udl1T7OFfWjuIKWCodHUCSNjwbh7Q4KSCts5x4FHdNgpV1oDl0Em6JADyIoEpJKqKAlIJRkpBKAG53WafT81zrid93vA5ODB6roFU8BtztufQarm+PPJceZMlyRte658z6R1+l8sosSqAxryBd4cWMedWsPM+vRaD6GKm1VVxk6yQNeL7kh2v81msUF/Eb3z2TXAuKfVcThkJsx58GTkBG7T+dk0Y3BobI6yJnacbhuLhYqpppWueWszub5msvlLgt/U2N1XupfOCByt8FJK2dalSowmE4/XzTmBnhwFovZovLb4rQTYDibwb1Qfd4b5wXaqzxDhtkrmzRnwp2jSaOwLm9CozsTqqfTxYXEOzeBUDwXE9iuh3/idPpv61fDT/XkztZwriBkMRkiIPm0c7IobeGKppP2gBDwzyg+0rufjSoEpLqeMkNt5HAfmqyXimqlfaNkY+0zhvtm3QqcnkOjl619xK3GJqukAHi5szrNbJ5xb0U/DKSoka18oa1znDK1oIOVT8IwMlwnqiZJB7DH3c1mt1oYohmudhspSeq8nDkbUnb3+uiNDFlGqzn0gT2oHDm+RjO+9/wBFq5naLmn0j4mHyx07TpF9pJ/Gdvy/mlxRuaIZpVjbKCmPkLvxW73Vvgh8R7mX1cwtH8XJUUB8h7v06KyoYpIx47B/kuD3dbXXTNHHF6Oq8IVBMHhk6x2uPwnUFaJpWN4Zqw4NlaAGuPhu1Bsw6t+RJHxWvaVKL0JPsfaUoFNNKUCnEHboJAKNAD5KQSgSkkq4oRKQSjcUglBhAxWSzbddO1t/0XPsXO3Uu3W0xyTzW/AfzWMxlns/xn5Lly/Y7vTqomaxV5bK1w9yx6OCjR0ALJpW5iI2hxbcBxaTv8FZ45TGzD/9sipJPBBdoWyxFj4yQMzCFSMtaNnG2zoPAvEYq6UNeft4AGStO7m8nfFaqnbcrgPDVU+CugLXObmlbG+2gdETYgrt7ql0T7O/7X/dIWyjTDHNyW+y+bBpp/VVGMUPiNIcwOHcXVnh2JNcLXFwp8j22vcfklLQk4u0cwm4fiv/AJZHxNlKosPZH7DAD1tqthVOjN9rqvkLB7v6pZO/J0yz5JKnJ/8ASJHGQLn4IPdYWRVVUL25BV9TVhoJJ0CgznI/EGKspoHSPI8o8rPvPk5BceqnPlLp3m7pZTfXUuVlxdi76moIOkcTi2OPlfqe6hBwLI2jZjeennJuV14ocFZx5cnN14QcA2HRbDhm2ZzXAFr48pbyIWaZHay0mCDUd3Wv3KnlkNGOi34Vh8GqqKJ3+W8F8V98u4/vsttSOOUBxu5vlcdr91iZak/tSmsNQy0npqtq3e/92Sp+SUiW0pYKaaU4CnJjgKCSCiWgSCUglGSkOK6BBJKQSg9wGpIAG5OgsqPEuKKWG4Mge5v7uH7R2ZAAxMXnA6gf7VS1NIHAOdoC/Tpa6b/bjp5WSRst4jvDs/dreqd8a4DdSGyH0sF5+WVSZ6mCPtRT8SRtDQNOQCylSw2cL+zq3notNjUmd1vdIFuWZZ+uFgLe8W9lXE9GZURaCPNNCebZWEdctwu91VOJIQTvbfdcJw4ESsv914dbsu84U+8DeflFvRPPuiUVSszxY6N2hII2KfOJSWsTdT6+n1vZVUsKRl4ysS6tPT8zumn1JOw+dykuaklSbKNiHPO6q8VmswknYKyfsVl+Jq0BhaNzv0DUsVbJydIw8ozSOcebj809Fv8A3smyLkpRdpYL0DgJ0El9OQK0WGnQje40t72hWbpBax+PxU6mqCH6E720XPkjZaDNrhlIXVPiu1OSwI9m61kLtB2WFwriONrskgtlNg9vRbGiqWPaHMc1wPNpupxTRPIWTSnAVHY5OtKoSHgUElpQWgKqqlkbC+RzGNbu95DQsfjHHcbbtp2Zz/rTXji+A3Kx2OcQTVb7yGzW+xEy4jaqd8i7FElZaYjjtROT4ksjgf3YOSID0VW6blb49EyZEh7loGt4cfdrHakMLnH1VhNPljNjZxB16d1V8KyjwHXGjHEOd+A80qskLoweutu2y8vLH5Getgl8aI0clyTe9tSTrdygzRF+Qe8877WunoB5HAX1k572Rwx3B1tluCeWU2VVoHsZjgvNpew587Lr/DU5MDQd2jK7kcwXO+H6AyS3to4hoG/lXSaKDK8256HoShu2HGokudVs7AraaIkKvnjKZk0VcsajlqnSxlRpGEBQkiiZU4rUZGaaudo0bXKwGOVN3loN8p8zvekWo4gmdqRv7EY78ysqKW8tuUYu4/iVMSrbEyXVFY5hGnzQjjLj2v8ACynVENzpzSo6fSw35ldHIhw2NF+lh6BOQvtcnl/7JuaMjsAk57ttyv8Amsqw6CkqPOT39NFNosVmifnhcQRuwG2noqs6aH80m+txe4+abimTcmjpmA8dxSWbUfZu28QaxE/otpBO17Q5rmuB2c0hzbLz86S+p36jS6tsFx2enN45HAg6xu80Th3CWWOuhE0zuTSgs7wxxTHVtykeHK32or3aT2QUzaOUF6bc9E4pJXcc4C5HfVIKMLDS5wmoyMc2+kx8Lo21lbUzc8NydRYaW1A3WVLyGAA6h3xAWjwWcZbPsAG5nHZt+a5c0Ncjt9PPfEJ8eRrBzkLngc72/okQx62G72BvXVLjfnqPEOzbtDR93RaPgvDBNM6QgFodYBQt9HZFLs0fBOEgRBzhYu0aOYb1WvdSCwAFrbJuKmDMpA0b8rKaHJ4onN27IwiuPTf1USen7KycOY/sJk6/8JxEU7qTsotVT2aTbZX5YoddHeM+iVoZdnPKuizz2I0a26zVNTXfMLamW35rojaceLMega0fJYzBmZqmZp3bOTbtqp1oq6sqPqZOaw0adT0PRNQxZHi+xdutXRUmaGUW82cvtz11CbjwkSQlp0NrjSxDkJjcEUHEFEGRFwtcC9zYBZZkvy6dCtzXjPQyB4GdjDo4m1wsBey6MS0cXqXUtDj3/wB90pgumFJphqB8R6JyKdjDkGuRz+2R0cm7qhHplhSYi+KRssbi14tc7+ZBQAUazgn4N5P8k1x5JLiggqEwijCCCDRbN9Tp8ynp6k2DR7IG3MnugglkkMpNdEqGrtGJDsBkceebkt79GkwcSQefs7IILlyRS3+zvwzb1+jqke1koMsjQWGiXplzOY+I5IILRkDLfZMzxGx7oILGBSx04L5O7v0XPqmmNPij76Nmfdjtm5kEEj6Lrs0cUYa4OtYOAY/TS/IqTHS5XkcnC45hBBEUNLoxfGdQKeFzLeed7slrWEd9Vg3MB125kIILqSpHmZZOU9jcnIf0Umj5uOzRZBBD6Jx7Ib33cT1KJBBUJsAQQQQB/9k=",
      link : "p"
    },
    {
      name : "Bechetoille Clément",
      presentation :"Campus Manager de la Wild Code School Reims, passionné d'innovation et d'éducation",
      picture:"https://quartierlibre.co/sites/default/files/styles/large/public/upload/Wild%20Code%20School_Cle%CC%81ment%20BECHETOILLE.jpg?itok=jFFSpMhx",
      link : "p"
    },
    {
      name : "Hubert Mickael",
      presentation :"Je suis responsable de l’infrastructure de téléphonie (VoIP) d'Allo-Media. Mon travail s'approche plus du *ops* de devops.",
      picture:"https://media.licdn.com/dms/image/C5603AQGhQXu2UwJ7RQ/profile-displayphoto-shrink_800_800/0?e=1557360000&v=beta&t=_UwC7VgTIY34HaEUyZdLcoBQAORgyOnqqnf5C-JjWuI",
      link : "p"
    }
  ]

/*let nameClassElem = document.getElementsByClassName("poeplesName");
console.log(nameClassElem)
let constTest = "";
for (let i = 0; i < resid.length; i++){
  constTest += `It is ${resid[i].name}`
  nameClassElem.innerHTML = constTest;
  console.log(nameClassElem);
}*/

document.addEventListener("DOMContentLoaded", () => [
  residsListElem = document.getElementById("residsList");
  console.log(residsListElem);
let peoplesCount = "";
for (let i = 0; i < resid.length; i++){
  peoplesCount += `<article class="container rounded-sm mt-4 cyanBorder">
  <div class="row">
    <div class="container position-relative mrBox">
      <div class="row col-sm-12" style="background-color: white; height: 2rem; width: 8rem;">
        <header>Nos résidents</header>
      </div>
    </div>
    <div class="card mb-3 col-sm-9" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            src="https://quartierlibre.co/sites/default/files/styles/large/public/upload/Le%20Bloc_Virginie%20FAUCHEUX.jpg?itok=2_PVa9vb"class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title police">${resid[i].name}</h5>
            <p class="card-text">Pour la société Le Bloc j'occupe les fonctions d'Office Manager, en d'autres termes l’administratif et la comptabilité. Sur le projet Quartier Libre, j'ai en charge l'animation de la vie communautaire et la gestion des bâtiments, donc le bien-être des Résidents</p>
          </div>
        </div>
      </div>
    </div>
    <div class="card mb-3 d-none d-lg-block col-5" style="max-width: 540px;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="https://quartierlibre.co/sites/default/files/upload/img20_0.png" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title police">Le Bloc</h5>
            <p class="card-text">${resid[i].presentation}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row col-sm-8">
      <p>
        <a class="btn btn-light col-12 d-lg-none" data-toggle="collapse" href="#collapse0" role="button"
          aria-expanded="false" aria-controls="collapse0">
          Plus d'informations
        </a>
      </p>
    </div>
    <div class="collapse" id="collapse0">
      <div class="card mb-3 col-6" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${resid[i].picture}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title police">Le Bloc</h5>
              <p class="card-text">La société Le Bloc a pour objectif de développer des solutions éphémères et pérennes, visant la valorisation de l’innovation, la création et l’entrepreneuriat sur notre territoire.
                Elle a porte, entre autre, le projet multidimensionnel dénommé Quartier Libre.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>`
residsList.innerHTML = peoplesCount
}
]);