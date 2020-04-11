function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  nowServing = line[0]
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    line.shift()
    return `Currently serving ${nowServing}.`
  }
}

function currentLine(line) {
  var listCustomer = "The line is currently: "
  if (line.length===0) {
    return "The line is currently empty."
  } else {
    for (let i=1; i<=line.length; i+=1) {
      listCustomer += `${i}. ${line[i]}`
    }
  }
  return listCustomer
}
