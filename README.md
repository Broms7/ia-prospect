# ia-prospect

Page d'audit de qualification prospect pour Kaïro Freelance.

Outil statique (HTML/JS, sans build ni backend) qui lit tout son contenu depuis
le paramètre d'URL `?d=` : les données de l'audit (score, diagnostics, axes
d'amélioration, comparaison concurrence) sont compressées (gzip) et encodées
en base64url côté génération, puis décompressées et affichées côté client.
Une seule page déployée sert un nombre illimité d'audits, sans redéploiement
par prospect.

Déployé sur Vercel.

## Utilisation

Génère un lien d'audit à partir d'un fichier JSON de données :

```
node generate-audit-link.mjs audit.json
```

(script de génération conservé en local, non inclus ici car il écrit dans le
tracker de suivi prospects)
