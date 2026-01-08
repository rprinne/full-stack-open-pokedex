Oletetaan, että tehdään R-paketteja. Tähän voi käyttää RStudiota, joka on kehitysympäristö R-projekteille. Uudelle projektille voidaan luoda valmis kansiorakenne paketilla usethis: https://usethis.r-lib.org/.

Devtools-paketti: https://devtools.r-lib.org/ sisältää joukon funktioita, joilla voidaan luoda testejä. Testaukseen voidaan käyttää pakettia testthat: https://testthat.r-lib.org/. Lisäksi devtools-paketti sisältää projektin julkaisua varten esim. fnktion build.

R-kielen linttaukseen voidaan käyttää pakettia lintr: https://lintr.r-lib.org/articles/lintr.html. Paketti tukee Tidyversen tyylioppasta, joka lienee yleisimmin käytetty tyyliopas R:lle. Lintteri on myös kustomoitavissa. Toinen yleisesti käytetty tyyliohje on Google tyyliohje. Koodin automaattiseen korjaukseen voidaan käyttää pakettia styler: https://styler.r-lib.org. Paketti lintr voidaan myös liittää GitHub Actioniin, jolloin koodi lintataan aina kun uusia muutoksia viedään GitHubiin.

R:ään on saatavilla myös precommit-paketti; https://github.com/lorenzwalthert/precommit. Precommit-hookit ovat testejä, jotka ajetaan joka kerta, kun GitHubiin yritetään tehdä committi. Commit menee läpi vain jos kaikki testit menee läpi. Nämä testit voivat sisältää paitsi lintausta, niin myös esim. dokumentaation oikeinkirjoituksen tarkistusta (spellcheckin).

Koska usethis-paketti käyttää gittia, niin käyttäisin mieluusti sitä. R:ään on kuitenkin saatavilla myös Jenkins: https://github.com/ropensci/jenkins, mutta tämän konfiguroiminen projektin workflowhun voi olla hankalampaa.