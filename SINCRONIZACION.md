# 📤 Guía de Sincronización con GitHub

## 🚀 Cómo sincronizar cambios

Cada vez que hagas cambios en el código, sigue estos pasos:

### 1️⃣ Agregar cambios
```bash
git add .
```

### 2️⃣ Hacer commit
```bash
git commit -m "Descripción de los cambios"
```

**Ejemplo:**
```bash
git commit -m "Agregar componente de login a users-app"
```

### 3️⃣ Hacer push (Se hará automático después del commit)
```bash
git push
```

---

## 📝 Ejemplos de buenos mensajes de commit

✅ `git commit -m "feat: agregar autenticación con JWT"`  
✅ `git commit -m "fix: corregir error en cálculo de tarifa de entrega"`  
✅ `git commit -m "docs: actualizar README con instrucciones"`  
✅ `git commit -m "style: mejorar diseño de página de inicio"`  

---

## ⚙️ Automatización activada

El repositorio está configurado para:
- **Post-commit hook**: Automáticamente hace push después de cada commit
- **Sincronización**: Los cambios aparecen en GitHub en segundos

---

## 🔍 Verificar estado

```bash
# Ver estado actual
git status

# Ver últimos commits
git log --oneline -5

# Ver cambios no confirmados
git diff
```

---

## ❌ Si algo falla

Si el push automático no funciona:

```bash
# Hacer push manual
git push origin main

# Si hay conflictos, actualizar primero
git pull origin main
git push origin main
```

---

## 📋 Pasos rápidos para cambios

```bash
# Todo en uno
git add . && git commit -m "tu mensaje aqui" && git push
```

¡Listo! Tu código se verá en GitHub automáticamente 🎉
