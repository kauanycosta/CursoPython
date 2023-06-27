# ----------------------------------------------------------------------------------------------------- // //
# 1 - Escreva um programa que leia três valores com ponto flutuante: A, B e C.
# Em seguida, calcule e mostre:
# a) a área do triângulo retângulo que tem A por base e C por altura.
# b) a área do circulo de raio C. (pi = 3.14159)
# c) a área do trapézio que tem A e B por bases e C por altura.
# d) a área do quadrado que tem lado B.
# e) a área do retângulo que tem lados A e B.
# EXEMPLO DE SAÍDA
# - Triângulo: 9,999
# - Circulo: 9,999
# - Trapézio: 9,999
# - Quadrado: 9,999
# - Retângulo: 9,999
# ----------------------------------------------------------------------------------------------------- // //

a = float (input('Informe o valor A: '))
b = float (input('Informe o valor B: '))
c = float (input('Informe o valor C: '))
pi=3.14159

areaTriRet = ((a*c)/2)
areaCir = (pi*(c**2))
areaTrap = ((a+b)*(c/2))
areaQuad = (b**2)
areaRet = (a*b)

print('A área do triângulo retângulo é: {:.2f}'.format(areaTriRet))
print('A área do círculo é: {:.2f}'.format(areaCir))
print('A área do trapézio é: {:.2f}'.format(areaTrap))
print('A área do quadrado é: {:.2f}'.format(areaQuad))
print('A área do retângulo é: {:.2f}'.format(areaRet))

print('\nDDD |  Cidade')
print('61  |  Brasília')
print('71  |  Salvador')
print('11  |  São Paulo')
print('21  |  Rio de Janeiro')
print('32  |  Juiz de Fora')
print('19  |  Campinas')
print('27  |  Vitória')
print('31  |  Belo Horizonte')

ddd = int (input('Qual o DDD da cidade: '))
match ddd:
    case 61:
        print('A cidade com esse DDD é Brasília.')
    case 71:
        print('A cidade com esse DDD é Salvador.')
    case 11:
        print('A cidade com esse DDD é São Paulo')
    case 21: 
        print('A cidade com esse DDD é Rio de Janeiro')
    case 32: 
        print('A cidade com esse DDD é Juíz de Fora')
    case 19:
        print('A cidade com esse DDD é Campinas')
    case 27:
        print('A cidade com esse DDD é Vitória')
    case 31: 
        print('A cidade com esse DDD é Belo Horizonte')
    case _:
        print('Valor {} inválido'.format(ddd))
