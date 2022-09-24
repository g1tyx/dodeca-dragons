function format(ex, acc=2, max=9, type='sc') {
  function E(x) {return new Decimal(x)}
  ex = E(ex)
  neg = ex.lt(0)?"-":""
  if (ex.mag == Infinity) return neg + 'Infinity'
  if (Number.isNaN(ex.mag)) return neg + 'NaN'
  if (ex.lt(0)) ex = ex.mul(-1)
  if (ex.eq(0)) return ex.toFixed(acc)
  let e = ex.log10().floor()
  switch (type) {
      case "sc":
          if (ex.log10().lt(Math.min(-acc,0)) && acc > 1) {
              let e = ex.log10().ceil()
              let m = ex.div(e.eq(-1)?E(0.1):E(10).pow(e))
              let be = e.mul(-1).max(1).log10().gte(9)
              return neg+(be?'':m.toFixed(3))+'e'+format(e, 0, max, "sc")
          } else if (e.lt(max)) {
              let a = Math.max(Math.min(acc-e.toNumber(), acc), 0)
              return neg+(a>0?ex.toFixed(a):ex.toFixed(a).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
          } else {
              if (ex.gte("eeee10")) {
                  let slog = ex.slog()
                  return (slog.gte(1e9)?'':E(10).pow(slog.sub(slog.floor())).toFixed(4)) + "F" + format(slog.floor(), 0)
              }
              let m = ex.div(E(10).pow(e))
              let be = e.log10().gte(9)
              return neg+(be?'':m.toFixed(3))+'e'+format(e, 0, max, "sc")
          }
      case "st":
          let e3 = ex.log(1e3).floor()
    if (e3.lt(1)) {
      return neg+ex.toFixed(Math.max(Math.min(acc-e.toNumber(), acc), 0))
    } else {
      let e3_mul = e3.mul(3)
      let ee = e3.log10().floor()
      if (ee.gte(3000)) return "e"+format(e, acc, max, "st")

      let final = ""
      if (e3.lt(4)) final = ["", "K", "M", "B"][Math.round(e3.toNumber())]
      else {
        let ee3 = Math.floor(e3.log(1e3).toNumber())
        if (ee3 < 100) ee3 = Math.max(ee3 - 1, 0)
        e3 = e3.sub(1).div(E(10).pow(ee3*3))
        while (e3.gt(0)) {
          let div1000 = e3.div(1e3).floor()
          let mod1000 = e3.sub(div1000.mul(1e3)).floor().toNumber()
          if (mod1000 > 0) {
            if (mod1000 == 1 && !ee3) final = "U"
            if (ee3) final = FORMATS.standard.tier2(ee3) + (final ? "-" + final : "")
            if (mod1000 > 1) final = FORMATS.standard.tier1(mod1000) + final
          }
          e3 = div1000
          ee3++
        }
      }

      let m = ex.div(E(10).pow(e3_mul))
      return neg+(ee.gte(10)?'':(m.toFixed(E(3).sub(e.sub(e3_mul)).add(acc==0?0:1).toNumber()))+' ')+final
    }
      default:
          return neg+FORMATS[type].format(ex, acc, max)
  }
}