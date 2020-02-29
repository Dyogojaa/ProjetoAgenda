using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetoAgenda.Models
{
    public class Telefone
    {
        public int Id { get; set; }
        public Contato Contato { get; set; }
        public string NumeroTelefone { get; set; }
    }
}