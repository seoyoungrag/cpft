
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>ArrayOfCashBillLog complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType name="ArrayOfCashBillLog"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CashBillLog" type="{http://ws.baroservice.com/}CashBillLog" maxOccurs="unbounded" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ArrayOfCashBillLog", propOrder = {
    "cashBillLog"
})
public class ArrayOfCashBillLog {

    @XmlElement(name = "CashBillLog", nillable = true)
    protected List<CashBillLog> cashBillLog;

    /**
     * Gets the value of the cashBillLog property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the cashBillLog property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getCashBillLog().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CashBillLog }
     * 
     * 
     */
    public List<CashBillLog> getCashBillLog() {
        if (cashBillLog == null) {
            cashBillLog = new ArrayList<CashBillLog>();
        }
        return this.cashBillLog;
    }

}
