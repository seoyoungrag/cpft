
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>ArrayOfTaxInvoiceTradeLineItem complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfTaxInvoiceTradeLineItem"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="TaxInvoiceTradeLineItem" type="{http://ws.baroservice.com/}TaxInvoiceTradeLineItem" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfTaxInvoiceTradeLineItem", propOrder = {
    "taxInvoiceTradeLineItem"
})
public class ArrayOfTaxInvoiceTradeLineItem {

    @XmlElement(name = "TaxInvoiceTradeLineItem", nillable = true)
    protected List<TaxInvoiceTradeLineItem> taxInvoiceTradeLineItem;

    /**
     * Gets the value of the taxInvoiceTradeLineItem property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the taxInvoiceTradeLineItem property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getTaxInvoiceTradeLineItem().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link TaxInvoiceTradeLineItem }
     * 
     * 
     */
    public List<TaxInvoiceTradeLineItem> getTaxInvoiceTradeLineItem() {
        if (taxInvoiceTradeLineItem == null) {
            taxInvoiceTradeLineItem = new ArrayList<TaxInvoiceTradeLineItem>();
        }
        return this.taxInvoiceTradeLineItem;
    }

}
