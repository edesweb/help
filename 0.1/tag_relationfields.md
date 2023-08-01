##RelationFields

**[RelationFields]** Field, Field2, ...., FieldX


Define la dependencia de datos en los Selects Anidados (Ss)

- - -

####Parámetros

**Field**:
	Campo de la etiqueta [>tag:fields](Fields)

- - -

####Ejemplos

```
[RelationFields] cd_auto, cd_prov, cd_coma, cd_muni, cd_distri

[Fields]
    Autonomía		| cd_auto		| N | S  | 2	|    | M |	|	| 
    Provincia		| cd_prov		| N | Ss | 2	|    | M |	|	| 
    Comarca  		| cd_coma		| N | Ss | 2	|    | M |	|	| 
    Municipio		| cd_muni		| N | Ss | 3	|    | M |	|	| 
    Distrito		| cd_distri		| N | Ss | 2	|    | M |	|	| 
```

Ver también:
	[>tag:field_ctl](Fields CTL)
   