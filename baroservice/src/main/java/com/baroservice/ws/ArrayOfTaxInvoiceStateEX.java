
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>ArrayOfTaxInvoiceStateEX complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfTaxInvoiceStateEX"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="TaxInvoiceStateEX" type="{http://ws.baroservice.com/}TaxInvoiceStateEX" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfTaxInvoiceStateEX", propOrder = {
    "taxInvoiceStateEX"
})
public class ArrayOfTaxInvoiceStateEX {

    @XmlElement(name = "TaxInvoiceStateEX", nillable = true)
    protected List<TaxInvoiceStateEX> taxInvoiceStateEX;

    /**
     * Gets the value of the taxInvoiceStateEX property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the taxInvoiceStateEX property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getTaxInvoiceStateEX().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link TaxInvoiceStateEX }
     * 
     * 
     */
    public List<TaxInvoiceStateEX> getTaxInvoiceStateEX() {
        if (taxInvoiceStateEX == null) {
            taxInvoiceStateEX = new ArrayList<TaxInvoiceStateEX>();
        }
        return this.taxInvoiceStateEX;
    }

}
