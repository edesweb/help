##AddCode

**[AddCode]** [>tag:mode] | field | [PB:P:PA:B:I:A] | HTML 

Añade código HTML antes(B), dentro(I) o después(A) de la definición del campo o
antes del prompt(PB), sustituir el prompt(P) o después del prompt(PA).

La utilización más frecuente es la inclusión de gráficos antes o después del campo, por ejemplo una lupa de búsqueda. 

- - -

####Parámetros

**field**:
	Campo al que se aplica la etiqueta

**[PB:P:PA:B:I:A]**:
	Dónde se tiene que inyectar el código HTML.
    - PB - prompt before
    - P  - prompt
    - PA - prompt after
    - B  - before control
    - I  - inside control (attributes)
    - A  - after control

**HTML**:
	Código HTML

- - -

####Ejemplos

```
[AddCode] a,mR | nif    | A | <img src='g/buscar.gif'>

[AddCode] a,mR | nombre | A | FuncionDeUsuario()

[AddCode] a,mR | periodo| A |  (aaaa-mm)
```